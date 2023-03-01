import classes from './ContactItem.module.css'

const ContactItem = props => {
  return(
    <div className={`col-lg-4 col-md-6 ${classes.contact}`}>
      <div className={classes['contact-name']}>
        {props.name}
      </div>
      <div className={classes['contact-info']}>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default ContactItem;