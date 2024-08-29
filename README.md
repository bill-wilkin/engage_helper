# Trait Activation Visualizer

The Trait Activation Visualizer is a Chrome DevTools extension crafted to help users visualize the payloads generated from Audience destination connections through Trait Activation. It leverages GraphQL request data within the Chrome DevTools interface, offering a precise and actionable preview of how Trait Activation settings will manifest and translate into downstream tools (destinations).

## Key features

- View Trait Activation Settings: Easily access and review your current Trait Activation configurations.
- Visualize Settings in Calls: See how your settings are applied in identify, group, and track calls, providing a real-world example of data flow.
- Update and Visualize in Real-Time: Modify Trait Activation settings and instantly view these changes within the extension, simplifying the process of updates and visualization.Profile Analyzer: checks a given profile's identities against space's ID resolution to determine corruptness.
- Mapping Assistance: Utilize detailed instructions provided by the payload to aid in the creation of accurate mappings, ensuring no data is missed due to incorrect configurations.

This extension is designed to streamline the process of setting up and adjusting Trait Activation, making it more intuitive to ensure your data is correctly mapped and utilized across your chosen destinations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Installation & Usage

To install the application, follow these steps:

1. **Clone the repository**
```bash
git clone git@github.com:bill-wilkin/engage_helper.git
cd engage_helper
```

After cloning, ensure you are on `main` branch and have pulled latest updates:
```bash
git checkout main
git pull origin main
```

2. **Installing Dependencies**

Navigate to the project directory and run `npm install`` to install the necessary dependencies.

3. **Building the Application**

Use `npm run build`` in the project directory to build the application and compile the extension into a format that can be loaded into Chrome.

4. **Loading the Extension**

Open Chrome's Extension Management page by navigating to [chrome://extensions](chrome://extensions).
Enable the __Developer Mode__ toggle in the top-right of the page, click on "Load unpacked" on the opposite side of the page, and select the project directory to load the extension.

5. **Using the Trait Activation Visualizer Extension**

For New Destination Trait Activation Connections:

- Create a new [Audience](https://segment.com/docs/engage/audiences/). Navigate to the Select Destination tab in the Audience builder and choose your destination.
- - If no destinations appear, first [add a destination](https://segment.com/docs/connections/destinations/add-destination/#adding-a-destination) to your Engage space.
- In the Event Settings section, you will find two options: Default Setup and Customized Setup. Choose [Customized Setup](https://segment.com/docs/engage/trait-activation/trait-enrichment/#customized-setup) for Trait Enrichment.
- Open Chrome Developer Tools with **Command + Option + J (Mac) or Ctrl + Shift + J (Windows/Linux)**.
- Select the “engage_helper” tab to begin visualizing a payload.

For Existing Trait Activated Destination Connections:

- From the Audience Overview page, select the connected Destination.
- Navigate to the ‘Customized Setup’ or the ‘Traits & Identifiers’ tab.
- Open Chrome Developer Tools with **Command + Option + J (Mac) or Ctrl + Shift + J (Windows/Linux)**.
- Click on the “engage_helper” tab to initiate visualization.

### Updating the Extension

If you've already installed the extension, pull the latest updates by navigating to the cloned repository on your local machine and run:
```bash
git pull
npm install
npm run build
```

### Next features
- Trait Activation Visualization for Journeys