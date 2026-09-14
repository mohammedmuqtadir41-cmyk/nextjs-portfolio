import Home from "@/src/models/Home";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";


export async function GET(req){
    try{
        await connectToDB();
        const extractData = await Home.find({});

        if(extractData){
            return NextResponse.json({
                success:true,
                data: extractData
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