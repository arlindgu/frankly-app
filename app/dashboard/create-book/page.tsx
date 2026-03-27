"use client";
import { createBook } from "@/lib/actions";


export default function CreateBookPage() {



    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-2xl font-bold">Create a new book</h1>
            <form className="flex flex-col space-y-4">
                <input
                    name="name"
                    placeholder="Book Name"
                    required
                    className="w-full rounded-md border px-3 py-2"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white font-medium rounded-md px-4 py-2"
                    onClick={() => {
                        createBook("Mein Haushaltsbuch2");
                    }}
                >
                    Create Book
                </button>
            </form>
            <button
                onClick={() => {
                    
                }}
                className="w-full bg-gray-200 text-black font-medium rounded-md px-4 py-2"
            >
                Cancel
            </button>
        </main>
    );
}