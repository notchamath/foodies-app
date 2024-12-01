"use server";

// 'server action' function that is guaranteed to execute only on the server side
export async function shareMeal(formData){
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }

  console.log(meal);
}