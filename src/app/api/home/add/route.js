import Home from "@/src/models/Home";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";


export async function POST(req){
    try{
        await connectToDB();

        const extractData = await req.json();

        const {_id, ...homeData } = extractData;

        let saveData;

        if(_id){
        saveData = await Home.findByIdAndUpdate(_id, homeData, {
            new: true,
            runValidators: true,
        });
        } else {
            saveData = await Home.create(homeData);
        }

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