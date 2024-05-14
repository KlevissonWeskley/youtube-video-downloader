export function generateSlug(title) {
    return title
        .trim()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
}