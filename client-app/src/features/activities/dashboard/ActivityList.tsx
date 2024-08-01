import { Button, Item, ItemContent, ItemGroup, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { SyntheticEvent, useState } from "react";

interface Props{
    activities: Activity[]
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityList({activities, selectActivity, deleteActivity, submitting}: Props){

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

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
                                <Button 
                                    name={activity.id}
                                    loading={submitting && target === activity.id}
                                    onClick={(e) => handleActivityDelete(e, activity.id)} 
                                    floated="right" content='Delete' color="red"/>
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