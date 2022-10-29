import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {


    return (
        <div className="footer">
            <a href="https://www.instagram.com/kikaortutova/" className="icon"><InstagramIcon sx={{fontSize: 18}}/></a>
            <a href="https://github.com/ort01" className="icon"><GitHubIcon sx={{fontSize: 18}}/></a>
            <a href="https://www.facebook.com/kristina.ortutova/" className="icon"><FacebookIcon sx={{fontSize: 18 }}/></a>
        </div>
    )
}