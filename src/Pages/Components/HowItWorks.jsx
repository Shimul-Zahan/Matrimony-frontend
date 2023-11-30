import React from 'react'
import TitleBar from '../../Utils/TitleBar'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ExploreIcon from '@mui/icons-material/Explore';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Typography from '@mui/material/Typography';

const HowItWorks = () => {
    return (
        <div className='mb-10'>
            <TitleBar title={'TIPS SECTION'} subTitle={'Here are Some Tips About How Our Site Works'} />
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body4"
                        color="#0174BE"
                    >
                        First
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <AppRegistrationIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h4" component="span" sx={{color: '#0C356A'}}>
                            Registration
                        </Typography>
                        <Typography sx={{ color: '#0174BE' }}>Registration to use our site</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body4"
                        color="#0174BE"
                    >
                        Second
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <AccountCircleIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h4" component="span" sx={{color: '#0C356A'}}>
                            Profile Creation
                        </Typography>
                        <Typography sx={{ color: '#0174BE' }}>Crate a cachy and impressive professional profile.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body4"
                        color="#0174BE"
                    >
                        Third
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <FingerprintIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h4" component="span" sx={{color: '#0C356A'}}>
                            Biodata Entry
                        </Typography>
                        <Typography sx={{ color: '#0174BE' }}>Add you biodata to match you partner.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body4"
                        color="#0174BE"
                    >
                        Fourth
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <ContactEmergencyIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h4" component="span" sx={{color: '#0C356A'}}>
                            Contact Options
                        </Typography>
                        <Typography sx={{ color: '#0174BE' }}>Because this is the life you love!</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body4"
                        color="#0174BE"
                    >
                        Highly Recommended
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <WorkspacePremiumIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h4" component="span" sx={{color: '#0C356A'}}>
                            Premium Membership
                        </Typography>
                        <Typography sx={{ color: '#0174BE'}}>Get a premium membership to make youself unique.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body4"
                        color="#0174BE"
                    >
                        Finally
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <ExploreIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h4" component="span" sx={{color: '#0C356A'}}>
                            Explore Us
                        </Typography>
                        <Typography sx={{ color: '#0174BE' }}>Feel free to search and request you matche's</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default HowItWorks