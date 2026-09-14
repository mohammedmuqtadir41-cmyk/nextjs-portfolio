import Home from "@/src/models/Home";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";


export async function POST(req){
    try{
        await connectToDB();
        const extractData = await req.json();
        const saveData = await Home.create(extractData)

        if(saveData){
            return NextResponse.json({
                success:true,
                message: 'Data Saved Successfully'
            })
        }else{
            return NextResponse.json({
                success:false,
                message: 'Something went wrong, Please try again'
            })
        }

    }catch(e){
        console.log(e);
        return NextResponse.json({
                success:false,
                message: 'Something went wrong, Please try again'
            })
    }
} 