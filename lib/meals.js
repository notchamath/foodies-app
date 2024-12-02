import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals(){
  await new Promise(resolve => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(para){
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(para);
}

export async function saveMeal(meal){
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

  const ext = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${ext}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImg = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImg), (err) => {
    if(err){
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}