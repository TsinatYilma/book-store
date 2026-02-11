"use client";
import "@/app/globals.css";
import {
  TrashIcon,
  PencilIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { Book } from "@/app/lib/definition";
import { fetchAllGenres } from "@/app/lib/API_Calls/fetching-data";

const genreSchema = z.object({
  genreName: z.string().min(1, "Book name is required"),
  description: z.string().min(5, "Description must be at least 5 characters"),
});

export interface Genre {
  id: string;
  name: string;
  description?: string;
  books: Book[];
}

export default function Page() {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof genreSchema>>({
    resolver: zodResolver(genreSchema),
  });
  const mutation = useMutation({
    mutationFn: async (payload: { genreName: string; description: string }) => {
      const res = await fetch("http://localhost:3000/api/genres/addgenre", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //  tell Nest it's JSON
        body: JSON.stringify(payload), //  send JSON
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to upload genre");
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["genres"] });
    },
    onError: (error) => console.error("❌ Upload failed:", error),
  });

  async function onSubmit(formData: z.infer<typeof genreSchema>) {
    const { genreName, description } = formData;
    mutation.mutate({ genreName, description }); // send plain object
  }
  const {
    data: genres,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchAllGenres,
  });
  if (error) return <p>Error loading genres</p>;
  const deleteGenreMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`http://localhost:3000/api/genres/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to delete genre");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["genres"] });
    },
  });

  function handleGenreDelete(id: string) {
    deleteGenreMutation.mutate(id);
  }

  return (
    <div className="flex flex-col px-3">
      <div className="flex flex-wrap gap-2 justify-start">
        {genres?.map(
          (genre: { id: string; name: string; description?: string }) => (
            <div
              key={genre.id}
              className="border-[0.25px] border-gray-400 p-2 rounded-[8px] flex items-center justify-between w-[217px]"
            >
              <p className="text-[16px]">{genre.name}</p>
              <div className="flex gap-1">
                <TrashIcon
                  onClick={() => handleGenreDelete(genre.id)}
                  className="h-4 w-4 text-gray-500"
                />
                <PencilIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          )
        )}
      </div>
      <form
        className="flex flex-col h-full"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e); // <-- this executes the handler
        }}
      >
        <div className="flex gap-10 mt-10 ">
          <div className="border-[0.25px] border-gray-700 flex justify-center w-[150px] gap-4 h-fit p-1 px-4 rounded-[8px]">
            <PlusCircleIcon className="h-5 w-5 text-gray-500" />
            <p className="text-[16px]">Add New</p>
          </div>
          <div className="flex flex-col gap-5">
            <input
              {...form.register("genreName")}
              type="text"
              placeholder="Genre Name"
              className="w-[400px] p-2 border-[0.25px] border-gray-400 rounded"
            />
            <textarea
              {...form.register("description")}
              placeholder="GenreDescription"
              className="w-[400px] h-[150px]  p-2 border-[0.25px] border-gray-400 rounded"
            />
            <button type="submit" className="fancyBorder w-[100px] ml-auto">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
