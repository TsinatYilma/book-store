export async function postBookRating(
    bookId: string,
    rateValue: number
) {
    const res = await fetch(
        `http://localhost:3000/api/ratings/books/${bookId}`,
        {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rateValue }),
        }
    );

    if (!res.ok) {
        throw new Error("Failed to submit rating");
    }

    return res.json();
}
