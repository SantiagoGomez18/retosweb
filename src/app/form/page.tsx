"use client"

import { useState } from "react";

export default function Form() {
    type FormData = {
        username: string;
        name: string;
        age: number;
    }
    const [formData, setFormData] = useState<FormData>({
        username: "",
        name: "",
        age: 0
    });

    return (
        <div className="flex flex-wrap mt-5">
            <form className="flex flex-col w-100 ">
                <p>Username:</p>
                <input type="text" className="border-1 h-8 w-auto bg-white text-black ml-2" maxLength={100} value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <p>Name:</p>
                <input type="text" className="border-1 h-8 w-auto bg-white text-black ml-2" maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <p>Age:</p>
                <input type="number" className="border-1 h-8 w-auto bg-white text-black ml-2" max={150} value={formData.age} onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })} />
            </form>
            <div className="ml-10">
                <p> Username: {formData.username}</p>
                <p> Name: {formData.name}</p>
                <p> Age: {formData.age}</p>
            </div>
        </div>
    );
}