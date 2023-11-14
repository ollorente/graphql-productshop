// @ts-check
export default (l, p) => {
  const limit = l !== undefined && l > 0 ? Number(l) : 10
  const page = p !== undefined && p > 0 ? Number(p - 1) * limit : 0

  return { limit, page }
}