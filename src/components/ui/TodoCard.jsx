import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TodoCard = ({ name, todo, date }) => {
  return (
    <div>
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>={name}</CardTitle>
        </CardHeader>
        <CardContent>{todo}</CardContent>
        <CardFooter className="flex justify-between">
          <h1>{date}</h1>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TodoCard;