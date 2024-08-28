import './Description.css';

const Description = () => {
     return (
        <>
            <h1 id='heading'>Trait Activation Visualizer</h1>
            <div>
                <p>
                Use Trait Activation to configure sync payloads that you send from Engage Audiences and Journeys to a Destination or Destination Function. Map traits from user profiles to Destinations, configure identifiers to sync, and choose a sync strategy that fits your use cases.
                </p>
                <p>
                Trait Activation includes both <a href="https://segment.com/docs/engage/trait-activation/trait-enrichment/" target="_blank" className='link'>Trait Enrichment</a> and <a href="https://segment.com/docs/engage/trait-activation/id-sync/" target="_blank" className='link' >ID Sync</a>. With Trait Enrichment, use custom, SQL, computed, and predictive traits to enrich the data you map to your destinations or destination functions. 
                </p>
                <p>
                Use ID Sync to select identifiers and a sync strategy for each identifier when syncing Engage Audiences to Destinations.
                </p>
                <p>
                To get started with Trait Activation, you'll need to set up the destination that you'll use with <a href="https://segment.com/docs/engage/trait-activation/trait-enrichment/" target="_blank" className='link'>Trait Enrichment</a> and <a href="https://segment.com/docs/engage/trait-activation/id-sync/" target="_blank" className='link'>ID Sync</a>.
                </p>
            </div>
            <div id='info-box'>
                <p>
                Need guidance on getting started? Check out our setup documentation!
                    <ul>
                        <li>
                            <a href="https://segment.com/docs/engage/trait-activation/trait-enrichment/" target="_blank" className='link'>Trait Enrichment</a>
                        </li>
                        <li>
                            <a href="https://segment.com/docs/engage/trait-activation/id-sync/" target="_blank" className='link'>ID Sync</a>
                        </li>
                    </ul>
                </p>
            </div>
        </>
     )
}

export default Description;