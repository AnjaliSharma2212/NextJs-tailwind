'use client'
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function DashBoardCard(){
    return(
        <Card sx={{p:3}}>
            <CardContent>
                <Typography variant="h6">
                    Sales Report
                </Typography>
            <Typography color="text.secodary" sx={{mt:1}}>
               ₹1,20,000 this month
            </Typography>
            <Button variant="contained" sx
            ={{mt:2}}>View Details</Button>
            </CardContent>
        </Card>
    )
}