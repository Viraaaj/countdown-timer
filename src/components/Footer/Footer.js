import FooterStyle from "./FooterStyle";
import { Grid, makeStyles } from "@material-ui/core";
import logo from "../../assets/logo.png";
import footerbg from "../../assets/footerbg.png";

const useStyles = makeStyles(FooterStyle);

const footerLinks = [
  {
    id: 0,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/viraj-nimbalkar/",
  },

  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/Viraaaj",
  },

  {
    id: 2,
    name: "Hashnode",
    link: "https://virajnimbalkar.hashnode.dev/",
  },

  {
    id: 3,
    name: "Dev.to",
    link: "https://dev.to/viraj",
  },
];

const Footer = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img src={logo} alt="logo" height={80} width={80} />

        <Grid container className={styles.linksContainer}>
          {footerLinks.map((item, index) => (
            <Grid
              item
              xs={3}
              sm={2}
              md={1}
              key={index}
              style={{ textAlign: "center" }}
            >
              <a href={item.link} target="_blank" className="footerLink">
                {item.name}
              </a>
            </Grid>
          ))}
        </Grid>

        <a href="mailto:virajnimbalkar55@gmail.com" className="emailLink">
          virajnimbalkar55@gmail.com
        </a>

        <img src={footerbg} alt="footer" className={styles.footerImage} />
      </div>
    </div>
  );
};

export default Footer;
