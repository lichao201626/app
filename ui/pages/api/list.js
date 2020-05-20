// Fake diary data
const diary = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default async (email) => {
  return {
    error: null,
    data: diary
  }
}
