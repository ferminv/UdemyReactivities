import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard(){

    const {activityStore} = useStore();

    return(
        <Grid>
            <GridColumn width='10'>
                <ActivityList/>
            </GridColumn>
            <GridColumn width='6'>
                {activityStore.selectedActivity && !activityStore.editMode &&
                <ActivityDetails />}
                {activityStore.editMode &&
                <ActivityForm />}
            </GridColumn>
        </Grid>
    )
})