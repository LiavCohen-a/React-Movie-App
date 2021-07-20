// Modules
import { useEffect, useState } from "react";
import '../membersCss.css';
import { useHistory } from "react-router-dom";

//Css
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    width : 300 , 
    height : "auto",
  },
  media: {
    height: 280,
    width : 230,
    display: "block",
    marginLeft : "auto",
    marginRight : "auto"
  },
});

//Components
import SubscriptionsComp from './SubscriptionsComp';

function MemberComp(props) {
  const history = useHistory();
  const [member,setMember] = useState({});
  const classes = useStyles();

  useEffect( () => {
    async function setData(){
      setMember(props.Member)
    }
    setData()
  }, [])

  let editMember = () => {
    history.push("/Subscriptions/EditMember/"+ props.Member.MemberId)
  }

  return (
    <div className="Member" >

       <Card className={classes.root}>
      <CardActionArea>
       
        <CardContent>
          <Typography align="center"  gutterBottom variant="h5" component="h2">
          {member.Name}
          </Typography>
          <Typography align="center" variant="body2" component="p">
          Email : {member.Email}
          </Typography>
          <Typography align="center" variant="body2" component="p">
          City : {member.City}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardContent>
          <Typography align="center"  variant="body2" component="div">
          <SubscriptionsComp memberID={member?.MemberId} />
          </Typography>  
        </CardContent>
      </CardActionArea>

      <CardActions style={{display : "flex",justifyContent: "center"}} >
        <Button onClick={() => editMember() } size="small" color="primary">
        Edit
        </Button>
        <Button onClick={() => deleteMember() } size="small" color="primary">
         Delete
        </Button>
      </CardActions>
    </Card>

    </div>
  );
}

export default MemberComp;
