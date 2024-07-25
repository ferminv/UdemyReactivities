import {Image, Card, CardContent, CardDescription, CardHeader, CardMeta, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity: Activity;
    cancelActivity: () => void;
    formOpen: (id: string) => void;
}

export default function ActivityDetails({activity, cancelActivity, formOpen}: Props){
    return(
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <CardContent>
            <CardHeader>{activity.title}</CardHeader>
            <CardMeta>
                <span>{activity.date}</span>
            </CardMeta>
            <CardDescription>
                {activity.description}
            </CardDescription>
        </CardContent>
        <CardContent extra>
            <Button.Group widths='2'>
                <Button onClick={() => formOpen(activity.id)} basic color='blue' content='Edit'/>
                <Button onClick={cancelActivity} basic color='grey' content='Close'/>
            </Button.Group>
        </CardContent>
    </Card>
    )

}