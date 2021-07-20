// Modules
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import PermissionsRequest from "../../Services/PermissionsRequest";

//Css
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: { 
    width : 400
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});


function UserComp(props) {
  const [permission, setPer] = useState([]);
  const history = useHistory();
  const classes = useStyles();

  useEffect( () => {
    async function getData()
    {
      let response = await PermissionsRequest.getUserPermissions(
        props.User.UserId
      );
      await setPer(response);
    }
    getData();
  }, []);

  let deleteUser = async () => {
    let response = await PermissionsRequest.deletePermissionsToUser(
      permission.perId
    );
    if (response) {
      alert("Permissions Was Deleted !");
    }
    props.deleteUser(props.User.UserId);
  };

  let editUser = async () => {
    history.push('/EditUser/' + props.User.UserId)
  };

  return (
    <div className="user" >

      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography  variant="h5" component="h2" gutterBottom>
         <b>Name :</b> {props.User.FirstName + " " + props.User.LastName}
        </Typography>
        <Typography  component="div">
        Session Time Out : {props.User.SessionTimeOut}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Created Date : {props.User.CreatedDate}
        </Typography>
        <Typography  component="div">
        Permissions :
                    {permission.data?.Permissions.map((x, index) => {
                      return <span key={index}> {index == 0 ? "" : ","} "{x}" </span>;
                    })}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => editUser() }>Edit</Button>
        <Button size="small" onClick={() => deleteUser() }>Delete</Button>
      </CardActions>
    </Card>

    </div>
  );
}

export default UserComp;
