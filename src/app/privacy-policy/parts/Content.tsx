import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Link from 'next/link'

export function Content() {
  return (
    <MainWrapper id='member-tos-content' className='pt-32'>
      <Typography size='DISPLAY_MD' className='text-dark px-4 md:px-0'>
        Worldwide Candidate Privacy Notice
      </Typography>

      <SectionWrapper id='member-tos-section-1'>
        <Typography size='BODY_LG_BOLDEST'>
          “Next Data Indonesia” - Worldwide Employment Candidate Privacy Notice
        </Typography>
        <Typography size='BODY_MD_NORMAL'>
          We understand that you care about how we use your personal information, and we value your trust in handling it
          responsibly. This notice outlines how we collect and use personal data from our candidates.
        </Typography>

        <Typography size='BODY_LG_BOLDEST'>1. Who Does This Notice Cover?</Typography>
        <Typography size='BODY_MD_NORMAL'>
          This notice applies to all employment candidates of “Next Data Indonesia” and its affiliated companies. For
          region- or country-specific notices that may provide additional details, please visit{' '}
          <Link href='www.nextdata.my.id' className='text-blue-800 underline'>
            www.nextdata.my.id
          </Link>{' '}
          or contact us at <Link href='mailto:admin@nextdata.my.id'>admin@nextdata.my.id</Link>
        </Typography>

        <Typography size='BODY_LG_BOLDEST'>
          2. What Personal Data Does “Next Data Indonesia” Collect About You, and How Is It Used?
        </Typography>
        <Typography size='BODY_MD_BOLDEST'>Data Collection and Control</Typography>
        <Typography size='BODY_MD_NORMAL'>
          The “Next Data Indonesia” entity you are applying to is responsible for controlling the personal data
          collected and how it is used. In some countries, this is referred to as the &quot;controller.&quot;
        </Typography>

        <Typography size='BODY_MD_BOLDEST'>Categories of Personal Data Collected</Typography>
        <Typography size='BODY_MD_NORMAL'>We may collect and use the following categories of personal data:</Typography>
        <ul className='px-12 list-disc'>
          <li>
            <Typography size='BODY_MD_NORMAL'>Identification data</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Contact information</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Demographic data</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Responses to screening questions</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Background check information</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Previous employment information</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Work preferences and abilities</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Resume data</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Job interview notes</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Assessment results</Typography>
          </li>
        </ul>

        <Typography size='BODY_MD_BOLDEST'>Purpose of Data Usage</Typography>
        <Typography size='BODY_MD_NORMAL'>Your personal data is used to:</Typography>
        <ul className='px-12 list-disc'>
          <li>
            <Typography size='BODY_MD_NORMAL'>
              Manage the recruitment process, including creating an electronic applicant HR file.
            </Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>
              Conduct interviews, including arranging travel or reimbursement.
            </Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Provide accommodations and process interview feedback.</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Perform background checks and screenings.</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>
              Notify you about other job opportunities at “Next Data Indonesia.”
            </Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>
              Fulfill recordkeeping and internal/external reporting requirements.
            </Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Conduct investigations or legal proceedings when necessary.</Typography>
          </li>
        </ul>

        <Typography size='BODY_LG_BOLDEST'>3. Where Does “Next Data Indonesia” Obtain Your Personal Data?</Typography>
        <Typography size='BODY_MD_NORMAL'>
          Most of the personal data we process is obtained directly from you during the application process (e.g.,
          interviews or assessments). We may also collect data from third parties, such as recruitment agencies.
        </Typography>
        <Typography size='BODY_LG_BOLDEST'>
          4. With Whom Does “Next Data Indonesia” Share Your Personal Data?
        </Typography>
        <Typography size='BODY_MD_BOLDEST'>Internal Use</Typography>
        <Typography size='BODY_MD_NORMAL'>
          Your data may be shared within “Next Data Indonesia” only when lawful and for legitimate purposes.
        </Typography>
        <Typography size='BODY_MD_BOLDEST'>External Use</Typography>
        <Typography size='BODY_MD_NORMAL'>We may share your data with third parties, including:</Typography>
        <ul className='px-12 list-disc'>
          <li>
            <Typography size='BODY_MD_NORMAL'>HR service providers</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Insurance organizations</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Government agencies or law enforcement</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>External advisors (e.g., legal consultants, accountants)</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Employee benefits providers</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Business partners of “Next Data Indonesia”</Typography>
          </li>
        </ul>
        <Typography size='BODY_MD_NORMAL'>
          These third parties may process your data on behalf of “Next Data Indonesia” or act as controllers in their
          own right.
        </Typography>
        <Typography size='BODY_LG_BOLDEST'>
          5. Does “Next Data Indonesia” Transfer Your Data to Other Countries?
        </Typography>
        <Typography size='BODY_MD_NORMAL'>
          Your personal data may be transferred to countries outside your region, for instance, if our service providers
          or systems are located in other countries.
        </Typography>
        <Typography size='BODY_LG_BOLDEST'>6. How Is Your Personal Data Secured?</Typography>
        <Typography size='BODY_MD_NORMAL'>
          We implement physical, electronic, and procedural safeguards to protect your personal data. These measures are
          designed to prevent unauthorized or unlawful processing, accidental loss, and damage to your data.
        </Typography>
        <Typography size='BODY_LG_BOLDEST'>7. How Long Is Your Personal Data Stored?</Typography>

        <Typography size='BODY_MD_BOLDEST'>If You Are Hired</Typography>
        <Typography size='BODY_MD_NORMAL'>
          Your data will be processed in accordance with the “Next Data Indonesia” Global Employee Privacy Notice.
        </Typography>
        <Typography size='BODY_MD_BOLDEST'>If You Are Not Hired</Typography>
        <Typography size='BODY_MD_NORMAL'>Your data may be retained for the following purposes:</Typography>
        <ul className='px-12 list-disc'>
          <li>
            <Typography size='BODY_MD_NORMAL'>Future job opportunities.</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Recordkeeping compliance.</Typography>
          </li>
          <li>
            <Typography size='BODY_MD_NORMAL'>Legal proceedings, if necessary.</Typography>
          </li>
        </ul>
        <Typography size='BODY_MD_NORMAL'>The retention period depends on local laws.</Typography>
        <Typography size='BODY_LG_BOLDEST'>8. What Are Your Rights Under Applicable Data Protection Laws?</Typography>
        <Typography size='BODY_MD_NORMAL'>
          Depending on the laws in your region, you may have rights regarding your personal data. For questions or
          inquiries about privacy and applicable rights, contact
        </Typography>
        <Typography size='BODY_LG_BOLDEST'>9. Questions and Concerns</Typography>
        <Typography size='BODY_MD_NORMAL'>
          For non-EU candidates, if you have questions about privacy or wish to contact one of our data controllers,
          please reach out to the Data Protection Officer (DPO) for your hiring entity, or email us at{' '}
          <Link href='mailto:admin@nextdata.my.id'>admin@nextdata.my.id</Link>
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-4'>
          Our policies may change as our business evolves. Check this notice regularly for updates.
        </Typography>
      </SectionWrapper>
    </MainWrapper>
  )
}
