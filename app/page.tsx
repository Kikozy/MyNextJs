"use client"
import { useContext } from "react";
import { AppContext } from "./components/AppContext";


export default function Home() {
  console.log('page reload')
  const { value, setValue } = useContext(AppContext)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{value.title ? value.title : 'Men! What can i say!'}</h1>
      <span hidden={value.navigate}>展示</span>
    </main >
  );
}
