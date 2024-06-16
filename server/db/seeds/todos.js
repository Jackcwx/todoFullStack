/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task_details: 'laundry', priority: 'low', completed: false },
    {
      id: 2,
      task_details: 'walk the dog',
      priority: 'medium',
      completed: true,
    },
    {
      id: 3,
      task_details: 'do the dishes',
      priority: 'high',
      completed: false,
    },
  ])
}
