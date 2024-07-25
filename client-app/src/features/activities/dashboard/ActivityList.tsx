import { Button, Item, ItemContent, ItemGroup, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activities: Activity[]
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props){
    return(
        <Segment>
            <ItemGroup divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.venue}, {activity.city}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => deleteActivity(activity.id)} floated="right" content='Delete' color="red"/>
                                <Button onClick={() => selectActivity(activity.id)} floated="right" content='View' color="blue"/>
                                <Label basic >{activity.category}</Label>
                            </Item.Extra>
                        </ItemContent>
                    </Item>
                ))}
            </ItemGroup>
        </Segment>
    )
}