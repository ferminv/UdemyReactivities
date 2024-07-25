import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    editMode: boolean;
    formOpen: (id: string) => void;
    formClose: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard(props: Props){
    return(
        <Grid>
            <GridColumn width='10'>
                <ActivityList 
                activities={props.activities} 
                selectActivity={props.selectActivity} 
                deleteActivity={props.deleteActivity}/>
            </GridColumn>
            <GridColumn width='6'>
                {props.selectedActivity && !props.editMode &&
                <ActivityDetails 
                activity={props.selectedActivity} 
                cancelActivity={props.cancelActivity}
                formOpen={props.formOpen} 
                />}
                {props.editMode &&
                <ActivityForm 
                formClose={props.formClose} 
                selectedActivity={props.selectedActivity}
                createOrEdit={props.createOrEdit}/>}
            </GridColumn>
        </Grid>
    )
}