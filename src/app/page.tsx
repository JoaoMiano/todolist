'use client'
import { useState } from "react";
import { Item } from '@/types/item'

const Page = () => {
    const [itemInput, setItemImput] = useState('')
    const [list, setList] = useState<Item[]>([])

    const handleAddItem = () => {
        if (itemInput.trim() === "") return
        setList([...list, { label: itemInput, checked: false }])
        setItemImput('')
    }

    const deleteItem = (index: number) => {
        setList(list.filter((item, key) => key !== index))
    }

    const handleToggleItem = (index: number)=>{
        let newList = [...list]
        for(let i in list){
            if(index === parseInt(i)){
                newList[i].checked = !newList[i].checked
            }
        }
        setList(newList)
    }
    return (
        <div className="container px-20 mx-auto h-screen bg-background flex flex-col items-center">
            <h1 className="font-bold text-4xl text-gray-200 m-4" >Lista de Tarefas</h1>
            <div>
                <input type="text" placeholder="Digite a sua tarefa"
                    className="w-96 h-30 p-1 outline-none"
                    value={itemInput}
                    onChange={e => setItemImput(e.target.value)} />

                <button className="bg-violet-950 p-2 m-4 text-gray-200 font-semibold rounded-md transition-all hover:bg-violet-800" onClick={handleAddItem}>Adicionar</button>
            </div>

            <ul className="w-full">
                {list.map((item, index) => (
                    <li className="text-gray-200 text-2xl bg-zinc-700 p-2 flex justify-between items-center rounded-md mb-2" key={index}>
                        <input type="checkbox" onClick={()=> {handleToggleItem(index)}} checked={item.checked} className="w-6 h-6 accent-violet-800 rounded-full" />
                        {item.label}
                        <button className=" rounded-full hover:drop-shadow-lg hover:bg-zinc-500 p-1 " onClick={() => deleteItem(index)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Page;