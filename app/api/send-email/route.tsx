import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(){

    await resend.emails.send({
        from: 'publicitar.sites@gmail.com',
        to: 'diogo.luis.job@hotmail.com',
        subject: 'Hello world',
        react: <WelcomeTemplate name="Diogo Luis" />,
      });

      return NextResponse.json({});

}