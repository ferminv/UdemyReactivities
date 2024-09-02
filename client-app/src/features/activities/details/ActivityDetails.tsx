import {Image, Card, CardContent, CardDescription, CardHeader, CardMeta, Button } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity, openForm, cancelSelectedActivity} = activityStore;

    if (!selectedActivity) return;

    return(
        <Card fluid>
        <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} />
        <CardContent>
            <CardHeader>{selectedActivity.title}</CardHeader>
            <CardMeta>
                <span>{selectedActivity.date}</span>
            </CardMeta>
            <CardDescription>
                {selectedActivity.description}
            </CardDescription>
        </CardContent>
        <CardContent extra>
            <Button.Group widths='2'>
                <Button onClick={() => openForm(selectedActivity.id)} basic color='blue' content='Edit'/>
                <Button onClick={cancelSelectedActivity} basic color='grey' content='Close'/>
            </Button.Group>
        </CardContent>
    </Card>
    )

}