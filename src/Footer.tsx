import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {


    return (
        <div className='wrapper'>
            <div className="footer">
                <p>created by Kristina Ortutova</p>
                <a href="https://www.instagram.com/kikaortutova/" className="icon"><InstagramIcon sx={{fontSize: 18}}/></a>
                <a href="https://github.com/ort01" className="icon"><GitHubIcon sx={{fontSize: 18}}/></a>
                <a href="https://www.facebook.com/kristina.ortutova/" className="icon"><FacebookIcon sx={{fontSize: 18 }}/></a>
            </div>
        </div>
    )
}