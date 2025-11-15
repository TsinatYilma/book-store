"use client"
import "@/app/globals.css";
import { z } from "zod"
import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image";
import {ChevronDownIcon, PlusCircleIcon, CalendarDateRangeIcon  } from '@heroicons/react/24/outline';
import Link from "next/link";
import { Fullscreen, X } from "lucide-react";
import { useMutation, useQueryClient } from '@tanstack/react-query'


const bookSchema = z.object({
  publishers:  z.preprocess(
    (val) => typeof val === "string" ? val.split(",").map(s => s.trim()) : val,
    z.array(z.string().min(1))
  ) as z.ZodType<string[], any >,
  name: z.string().min(1),
  authors: z.preprocess(
    (val) => typeof val === "string" ? val.split(",").map(s => s.trim()) : val,
    z.array(z.string().min(1))
  ) as z.ZodType<string[], any >,
  
  translators: z.preprocess(
    (val) => typeof val === "string" ? val.split(",").map(s => s.trim()) : val,
    z.array(z.string().min(1))
  ) as z.ZodType<string[], any>,
  
  editionNumbers: z.coerce.number() as z.ZodType<number, any>,
  description: z.string().min(5),
  isbn: z.string().optional(),
  summary: z.string().optional(),
  firstPublishedDate: z.string().date(),
  genres: z.array(z.string()),
  languages: z.preprocess(
    (val) => typeof val === "string" ? val.split(",").map(s => s.trim()) : val,
    z.array(z.string())
  ) as z.ZodType<string[], any >,
  statusName: z.string(),
  chapterName: z.string(),
  chapterNum: z.string(),
  image: z.any()
})

export default function Page() {
  
  const queryClient = useQueryClient()

  const [chapter, setChapter]=useState<number>(2)
  function handleAddChapter(pok:number){
    setChapter(chapter + pok)
    
  }
  const [languages, setlanguages]=useState<string>('')
  function handleAddlanguages(lang:string){
    console.log("am the one")
    console.log(lang)
    setlanguages(lang);
    form.setValue("languages", [lang]);
  }
  const [publication, setPublication]=useState<string>('')

// Remove the UUID map entirely
// const statusMap = { ... };

const handlePublicationStatus = (label: string) => {
  setPublication(label);           // for display
  form.setValue("statusName", label); // send label to backend
  console.log("Status label:", label);
};
  
  const [genre, setGenre]=useState<string>('')
  function handleGenre(genre:string){
    
    setGenre(genre);
    console.log("this is from genre", genre)
    form.setValue("genres", [genre]);
  }
  //published date
  const [date, setDate] = useState('');
  const [error, setError] = useState<boolean>(true);
  function checkdate(date: string) {
      const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/(20\d{2})$/;
      const match = date.match(dateRegex);
      if (!match) {
          console.log("the divat")
          console.log(error)
          return false;
      }
      const today = new Date();
      const year = parseInt(match[3])
      if (year > today.getFullYear()) {
          console.log("the year")
          return false;
      } else {
          return true;
      }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const input  = e.target.value;
  setDate(input);
      }
      
    const form = useForm<z.infer<typeof bookSchema>>({
      resolver: zodResolver(bookSchema),
    });
    const mutation = useMutation({
      mutationFn: async (payload: FormData) => {
        const res = await fetch('http://localhost:3000/api/books/addbook', {
          method: 'POST',
          body: payload,
          credentials: 'include',
        })
        if (!res.ok) throw new Error('Failed to upload book')
        return res.json()
      },
      onSuccess: (data) => {
        console.log('✅ Book uploaded successfully:', data)
        queryClient.invalidateQueries({ queryKey: ['books'] })
      },
      onError: (error) => console.error('❌ Upload failed:', error),
    })


    async  function onSubmit(formData: z.infer<typeof bookSchema>) {
      console.log("i am here");
      
        const { publishers, name, authors, translators, editionNumbers, description, isbn, summary, firstPublishedDate, genres, languages, statusName, chapterName, chapterNum, image } = formData;
    
        const payload = new FormData();
        const imageFile = image instanceof FileList ? image[0] : image;
        if (!imageFile) {
          console.error("No image file provided");
          return;
        }
        payload.append("image", imageFile);
        const bookDto = { publishers, name, authors, translators, editionNumbers, description, isbn, summary, firstPublishedDate, genres, languages, statusName, chapterName, chapterNum };
        // Append each field individually
        Object.entries(bookDto).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            payload.append(key, JSON.stringify(value));
          } else {
            payload.append(key, String(value));
          }
        });



        mutation.mutate(payload)
    
  }

      const fileInputRef = useRef<HTMLInputElement>(null);
      const [bookImage, setBookImage] = useState('')

      const handleImageClick = () => {
        fileInputRef.current?.click();
      };
    
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log("the image file", file)
        if (file) {
          const previewUrl = URL.createObjectURL(file);
          setBookImage(previewUrl)
          // You can now use previewUrl to show the image
          console.log("Preview URL:", previewUrl);
          form.setValue("image", file )
        }
      };
    
    return(
       <div className="flex flex-col h-full px-3 py-8">
       <form
        className="flex flex-col h-full"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e); // <-- this executes the handler
        }}
      >

        <div className="flex flex-col h-full ">
          <h1 className="font-semibold text-2xl text-white">Basic Information</h1>
          <div className="flex gap-10 mt-8  h-fit">
                <div onClick={handleImageClick} className="w-[120px] h-[150] bg-white flex justify-center items-center">
                    <Image src={'/upload.png'} className={`${bookImage ? 'hidden' : 'block'}`} alt="" width={20} height={20}  />
                    {bookImage && (
                      <img src={bookImage} alt="" className="w-full h-full"/>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      ref={(e) => {
                        form.register("image").ref(e); // connect to RHF
                        fileInputRef.current = e;      // keep your custom ref
                      }}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                </div>
                <div >
                    <div className="flex text-sm  gap-10 flex-col lg:flex-row">
                        <div className="flex flex-col gap-2">
                            <input {...form.register("name")} type="text" id="name" placeholder="Book name" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input {...form.register("authors")} type="text" id="authors" placeholder="authorss name(separate them with comma)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input {...form.register("translators")} type="text" id="translators" placeholder="Translation(optional)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input {...form.register("editionNumbers")} type="text" id="editionNumbers" placeholder="How many editionNumberss are there(optional)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                        </div>
                        <div className="min-h-full ">
                            <textarea {...form.register("description")} id="description" placeholder="Book Description" className="w-[285px] h-full border-1 border-white rounded pl-3 " />
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <div className="flex flex-col h-full my-5">
          <h1 className="font-semibold text-[20px]">Catagorization & Metadata</h1>
          <div className="flex gap-10 mt-8  h-fit">
                <div >
                        <div className="grid grid-cols-2 gap-2">
                            <input {...form.register("publishers")} type="text" id="publishers" placeholder="Publicher"  className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input {...form.register("isbn")} type="text" id="isbn" placeholder="isbn(optional)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <div className="relative">
                               <input {...form.register("firstPublishedDate")} type="date" id="firstPublishedDate" placeholder="MM/DD/YYYY" value={date} onChange={handleChange} className={`w-[285px] h-[30px] border-[1px] rounded pl-3 ${error? 'border-white':'border-red-500' } `}/>
                               <CalendarDateRangeIcon  className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"  />
                            </div>
                            <div className="relative DropGenre"> 
                              <input {...form.register("genres")} type="text" id="genres" placeholder="Genres" value={genre} readOnly className="w-[285px] peer h-[30px] text-sm border-1 border-white rounded pl-3 "/>
                              <ChevronDownIcon  className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                              <div className="GenreDropdown absolute top-[120%] border w-[285px] hidden peer-focus:flex flex-col bg-black z-100 p-3 gap-2 rounded shadow-lg">
                                  <div className="flex items-center gap-2">
                                        <label htmlFor={'clasi'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='clasi'  name="genres"  className="hidden peer" onChange={()=>handleGenre("Classics")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Classics</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'fic'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='fic'  name="genres"  className="hidden peer" onChange={()=>handleGenre("Fiction")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Fiction</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'lit'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='lit'  name="genres"  className="hidden peer" onChange={()=>handleGenre("Literature")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Litrature</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'liter'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='liter'  name="genres"  className="hidden peer" onChange={()=>handleGenre("Thriller")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Thriller</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'his'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='his'  name="genres"  className="hidden peer" onChange={()=>handleGenre("History")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">History</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
       </div>
       <div className="flex flex-col h-full my-5">
          <h1 className="font-semibold text-[20px]">Additional Details</h1>
          <div className="flex gap-10 mt-8  h-fit">
                    <div >
                        <div className="grid grid-cols-2 gap-2">
                            <div className="relative Droplanguages">
                                <input {...form.register("languages")} type="text"  placeholder="languagess" value={languages} readOnly className="peer w-[285px] h-[30px] text-sm border-1 border-white rounded pl-3 "/>
                                <ChevronDownIcon  className=" absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                                <div className="languagesDropdown absolute top-[120%] border w-[285px] hidden peer-focus:flex flex-col bg-black p-3 gap-2 rounded shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'amh'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='amh'  name="languages"  className="hidden peer" onChange={()=>handleAddlanguages("Amharic")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Amharic</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'eng'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='eng'  name="languages"  className="hidden peer" onChange={()=>handleAddlanguages("English")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">English</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'orm'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='orm'  name="languages"  className="hidden peer" onChange={()=>handleAddlanguages("Affan Oromo")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Affan Oromo</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'tig'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='tig'  name="languages"  className="hidden peer" onChange={()=>handleAddlanguages("Tigregna")} />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Tigregna</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'arab'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='arab'  name="languages"  className="hidden peer" onChange={()=>handleAddlanguages("Geez")} />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Geez</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative DropStatus">
                                <input {...form.register("statusName")} type="text" placeholder="statusId" value={publication} readOnly className="peer w-[285px] h-[30px] text-sm border-1 border-white rounded pl-3 "/>
                                <ChevronDownIcon  className=" absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                                <div className="StatusDropdown absolute top-[120%] border w-[285px] hidden flex-col bg-black p-3 gap-2 rounded shadow-lg peer-focus:flex">
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'pub'} className="w-3 h-3 relative  cursor-pointer">
                                          <input  type="radio" id='pub'  name="publication"  className="hidden peer" onChange={()=>handlePublicationStatus("Published")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 " />
                                        </label>
                                        <p className="text-sm">Published</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'tobepub'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='tobepub'  name="publication"  className="hidden peer" onChange={()=>handlePublicationStatus("To be published")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white  peer-checked:bg-cyan-500" />
                                        </label>
                                        <p className="text-sm ">To be published</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    
                </div>
            </div>
       </div>
       <div className="flex flex-col h-full my-5">
          <h1 className="font-semibold text-[20px]">Table of Contents</h1>
          <div className="flex flex-col gap-10 mt-8  h-fit">
                <div >
                        <div className="flex flex-col gap-2">
                            {[...Array(chapter)].map((index)=>(
                                 <div key={index} className="flex items-center gap-2">
                                    <input {...form.register("chapterNum")} type="text" placeholder="Chapter Number" className="w-[285px] text-sm h-[30px] border-1 border-white rounded pl-3 "/>
                                    <input {...form.register("chapterName")} type="text" placeholder="Chapter Name" className="w-[285px] text-sm h-[30px] border-1 border-white rounded pl-3 "/>
                                    <p className="text-white px-2 w-fit font-semibold  border-1 border-white rounded" onClick={()=>handleAddChapter(-1)}>_</p>
                                 </div>
                                
                            ))
                            }
                        </div>
                </div>
                    <button onClick={()=>handleAddChapter(1)} className="w-fit flex border-[0.15] border-gray-300 bg-black px-2 py-1  gap-2 mt-3 rounded">
                            <PlusCircleIcon className="w-5 h-5 text-cyan-500"/>
                            <p className="text-sm">Add Chapter</p>
                        </button>
            </div>
       </div>
              <button type="submit" className="mt-6 fancyBorder max-w-full flex-grow mx-30">
          Submit
        </button>
        </form>
       </div>
    )
}