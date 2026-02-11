export async function fetchReview({ bookID }: { bookID: string }) {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('am i trying to fetch the reviews')

    const res = await fetch(`http://localhost:3000/api/reviews/${bookID}`, {
        method: "GET",
        credentials: "include"
    });

    if (!res.ok) {
        console.error("Failed to fetch reviews", res.status, res.statusText);
        return [];
    }

    const data = await res.json();

    return data;

}
export async function PostReview(
    bookId: string,
    payload: { reviewText: string }
) {
    const res = await fetch(
        `http://localhost:3000/api/reviews/books/${bookId}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            credentials: "include",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to upload review");
    }

    return res.json();
}


export async function fetchAllReviews() {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('am i trying to fetch the reviews')

    const res = await fetch(`http://localhost:3000/api/reviews`, {
        method: "GET",
        credentials: "include"
    });

    if (!res.ok) {
        console.error("Failed to fetch reviews", res.status, res.statusText);
        return [];
    }

    const data = await res.json();

    return data;

}