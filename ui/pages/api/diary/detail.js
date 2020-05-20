// Fake diary data
const diary = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default async (id) => {
  console.log("id", id)
  return {
    error: null,
    data: { id: 1, name: 'User 1'}
  }
}