import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      try {
        const user = await prisma.user.findUnique({
          where: {
            email,
            password,
          },
        });
  
        if (user) {
          res.status(200).json({ message: 'Log in successful', user });
        } else {
          res.status(401).json({ message: 'Invalid login credentials' });
        }
      } catch (error) {
        console.error('Błąd logowania:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).end();
    }
    return NextResponse.json({ message: "User logged in succesfully", user });
  }