import { NextRequest, NextResponse } from "next/server";


export function GET(request : NextRequest){
    return NextResponse.json([
        {id:1,name:'Diogo'},
        {id:2,name:'Toniclenio'},
        {id:3,name:'Ester'},
    ])
}

export async function POST(request: NextRequest){
    const body =  await request.json();

    if(!body.name)
        return NextResponse.json({error:'Name required'},{status:404});

    return NextResponse.json({id:1,name:body.name},{status:201});
 }