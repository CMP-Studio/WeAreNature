var systems = {
    'Transportation' : {
      name: 'Transportation',
      icon: 'transportation_icon.png',
      actions: [
        { 
          id: 'Bike',
          name: 'Ride my bike.',
          altName: 'Ride your bike.',
          text: 'You’ll have more fun getting there, and save carbon dioxide emissions along the way.',
          localOrgText: '<span class="bodyBold">Bike Pittsburgh</span> is a local organization working to transform streets and communities into vibrant, healthy places by making them safe and accessible for people to bike and walk. Joining a group helps your individual actions influence systems at a larger scale.',
          localOrgLink: 'http://www.bikepgh.org/',
          learnMoreText: 'Learn more about the big picture for multi-modal transportation',
          learnMoreLink: 'http://www.pittsburghpa.gov/dcp/completestreets',
        },
        {
          id: 'Parking',
          name: 'Plan for parking.',
          text: 'Save time and cut emissions produced from idling and circling to find parking.',
          localOrgText: '<span class="bodyBold">The Pittsburgh Parking Authority</span> is experimenting with sensors that can tell you where parking is full and where you can find a space. When transit systems can get information to the public, you can make informed decisions that save you time and improve air quality.',
          localOrgLink: 'http://www.pittsburghpa.gov/dcp/completestreets',
          learnMoreText: 'Learn more about the bigger picture with local air quality',
          learnMoreLink: 'http://gasp-pgh.org/',
        },
        {
          id: 'Airquality',
          name: 'Report air quality issues.',
          text: 'Your observations can help scientists improve<br>air quality.',
          localOrgText: 'Scientists at the <span class="bodyBold">Allegheny County Department of Health</span> need your help to collect data on air quality. With the <span class="bodyBold">Smell Pittsburgh</span> mobile phone app designed by the CREATE Lab at Carnegie Mellon University, you contribute to a citizen science project that will help improve air quality.',
          localOrgLink: 'http://smellpgh.org/',
          learnMoreText: 'Learn more about the bigger picture with local air quality',
          learnMoreLink: 'http://breatheproject.org/',

        },
      ]
    },
    'Energy' : {
      name: 'Energy',
      icon: 'energy_icon.png',
      actions: [
        {
          id: 'Energyaudit',
          name: 'Do an energy audit.',
          text: 'Small changes in your home (like closing shades<br>on sunny days) can save money on energy bills.',
          localOrgText: '<span class="bodyBold">Conservation Consultants Inc.</span> is a nonprofit that helps homeowners and small businesses address environmental concerns. The Home Energy Saver project can be used for a DIY evaluation. Every kilowatt we save counts in a region that relies on fossil fuels for much of our energy.',
          localOrgLink: ['http://getenergysmarter.org/', 'http://hes.lbl.gov/consumer/'],
          learnMoreText: 'Learn about the bigger picture of how buildings can help the environment',
          learnMoreLink: 'https://www.go-gba.org/resources/green-building/',
        },
        {
          id: 'Renewable',
          name: 'Support renewable energy.',
          text: 'Learn more about alternative energy options that<br>are available to you.',
          localOrgText: 'Solar power generates energy without carbon emissions, and creates local jobs. Anyone who pays an electric bill can opt in to plans that source electricity from renewable sources. Ask your <span class="bodyBold">local electricity supplier</span> or learn more from <span class="bodyBold">PA PowerSwitch.</span>',
          localOrgLink: 'http://www.papowerswitch.com/shop-for-electricity/clean-energy-suppliers',
          learnMoreText: 'Learn about the bigger picture of energy sources and systems',
          learnMoreLink: 'https://www.pennfuture.org/clean-energy',
        },
        {
          id: 'Reuse',
          name: 'Try reuse.',
          text: 'Instead of using energy to make something new, upcycle materials for your next project. ',
          localOrgText: 'Find a donation center to take your old materials and provide a starter for something new. <span class="bodyBold">Construction Junction</span> has materials for home renovation, and <span class="bodyBold">Pittsburgh Center for Creative Reuse</span> deals with craft supplies for small creative projects.',
          localOrgLink: ['https://www.cjreuse.org/', 'http://pccr.org/'],
          learnMoreText: 'Learn more about the bigger picture from Zero Waste PA',
          learnMoreLink: 'http://prc.org/programs/zero-waste-services/zero-waste-pa/',
        },
      ]
    },
    'Food' : {
      name: 'Food',
      icon: 'food_icon.png',
      actions: [
        {
          id: 'Beef',
          name: 'Eat less beef.',
          text: 'Eating plant-based meals instead of a burger<br>can reduce your carbon footprint.',
          localOrgText: 'When you think about the energy, water, and fertilizer that go into meat production, the environmental impact really adds up. Grow your own food or visit a <span class="bodyBold">local farmer’s markets</span> to find affordable seasonal produce and show support for sustainable agriculture.',
          localOrgLink: 'http://www.pittsburghpa.gov/green/localfood.htm',
          learnMoreText: 'To learn more about how plant-based diets can help the environment',
          learnMoreLink: 'http://www.drawdown.org/solutions/food/plant-rich-diet',
        },
        {
          id: 'Foodwaste',
          name: 'Reduce food waste.',
          text: 'Use the Food Rescue Hero app to get your<br>leftover food to someone who needs it.',
          localOrgText: 'Did you order too much for an office meeting or special event? Fight hunger by sharing leftovers with those in need. <span class="bodyBold">412 Food Rescue</span> has a variety of programs to redirect fresh food from landfills to organizations that address hunger.',
          localOrgLink: 'https://412foodrescue.org/programs/foodrescuex/',
          learnMoreText: 'Learn more about the environmental impact of food systems and waste',
          learnMoreLink: 'http://www.drawdown.org/solutions/food/reduced-food-waste',
        },
        {
          id: 'Soil',
          name: 'Improve my soil.',
          altName: 'Improve your soil.',
          text: 'Try composting to reduce greenhouse gasses<br>and help plants grow.',
          localOrgText: 'When organic materials decompose in landfill environments that lack oxygen, it creates methane gas that contributes to global warming. <span class="bodyBold">The Pennsylvania Resources Council</span> offers low-cost classes on composting that include all required start-up materials. You can compost in your apartment or outdoors: less landfill waste benefits everyone.',
          localOrgLink: 'http://prc.org/programs/conservation-workshops/backyard/',
        },
      ]
    },
    'Water' : {
      name: 'Water',
      icon: 'water_icon.png',
      actions: [
        {
          id: 'Tree',
          name: 'Plant a tree.',
          text: 'Trees provide shade, look great, and help prevent sewer system overflows.',
          localOrgText: 'One tree can soak up 100 gallons of water. Collectively, the trees across an urban landscape can keep a significant amount of water out of the sewer system. <span class="bodyBold">Tree Pittsburgh</span> is dedicated to enhancing community vitality by restoring and protecting the urban forest.',
          localOrgLink: 'https://www.treepittsburgh.org/',
        },
        {
          id: 'Kayaking',
          name: 'Try Kayaking.',
          text: 'River recreation motivates people, businesses,<br>and government to keep our rivers clean.',
          localOrgText: 'Riverfront access has never been better. By taking part in the many activities available along Pittsburgh’s waterfront, you show those in local government what is important to its people, and where money should be invested for further improvements.',
          localOrgLink: 'http://www.ventureoutdoors.org/kayakpittsburgh/',
          learnMoreText: 'Explore the bigger picture benefits of trail recreation with Friends of the Riverfront',
          learnMoreLink: 'https://friendsoftheriverfront.org/trails/three-rivers-heritage-trail/',
        },
        {
          id: 'Plastics',
          name: 'Replace plastics with reusables.',
          text: 'Use a refillable water bottle or take your own<br>bags to the grocery store.',
          localOrgText: 'Our local rivers are part of a much larger watershed. Disposable plastics like bottles and straws end up in our waterways and will eventually flow to the Mississippi River and into the Gulf of Mexico. We may think of ourselves as landlocked, but our trash can end up in the ocean.',
          learnMoreText: 'The tireless project works to clean trash and debris from our riverbanks and streams',
          learnMoreLink: 'http://www.alleghenycleanways.org/tirelessproject',
        },
      ]
    },
    'Habitat' : {
      name: 'Habitat',
      icon: 'habitat_icon.png',
      actions: [
        {
          id: 'Birds',
          name: 'Help birds.',
          text: 'Learn about techniques to minimize bird-building collisions.',
          localOrgText: 'Birds can thrive in cities, but sometimes have fatal collisions with reflective glass on buildings. <span class="bodyBold">BirdSafe Pittsburgh</span> coordinates local research efforts to reduce bird-glass collisions and increase healthy habitats for birds.',
          localOrgLink: 'http://birdsafepgh.org/',
        },
        {
          id: 'Nativeplants',
          name: 'Grow native plants.',
          text: 'Gardening with plants that are suited to your soil saves money by decreasing the need for watering.',
          localOrgText: 'Native plants create food and shelter for local wildlife including birds, butterflies, and beneficial insects. Your garden is part of a larger habitat, including parks and land trusts, creating green corridors that support migrating wildlife.',
          localOrgLink: 'http://www.aswp.org/pages/native-plants',
          learnMoreText: 'Learn more about connected greenways',
          learnMoreLink: 'http://www.alleghenyplaces.com/maps/ec/Greenways.pdf',
        },
        {
          id: 'Hike',
          name: 'Take a hike.',
          text: 'Show support for local green spaces by exploring recreation in local parks.',
          localOrgText: 'There are hundreds of miles of hiking and biking trails to explore in city, county, and state parks. Your support for green public lands has additional benefits including more habitat for wildlife, protection for watersheds, and relief from urban heat islands.',
          localOrgLink: ['https://www.pittsburghparks.org/', 'http://www.alleghenycounty.us/parks/index.aspx', 'http://www.dcnr.state.pa.us/stateparks/'],
          learnMoreText: 'Learn more about urban landscapes and the heat island effect',
          learnMoreLink: 'http://www.climatecentral.org/news/urban-heat-islands-threaten-us-health-17919',
        },
      ]
    },
  }