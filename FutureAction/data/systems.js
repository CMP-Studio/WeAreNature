var systems = {
    'transportation' : {
      name: 'Transportation',
      icon: 'transportation_icon.png',
      actions: [
        { 
          id: 'bike',
          name: 'Ride my bike.',
          text: 'You’ll have more fun getting there, and save carbon dioxide emissions along the way.',
          localOrg: '<span class="bodyBold">Bike Pittsburgh</span> is a local organization working to transform streets and communities into vibrant, healthy places by making them safe and accessible for people to bike and walk. Joining a group helps your individual actions influence systems at a larger scale.',
        },
        {
          id: 'parking',
          name: 'Plan for parking.',
          text: 'Save time and cut emissions produced from idling and circling to find parking.',
          localOrg: '<span class="bodyBold">The Pittsburgh Parking Authority</span> is experimenting with sensors that can tell you where parking is full and where you can find a space. When transit systems can get information to the public, you can make informed decisions that save you time and improve air quality.',
        },
        {
          id: 'airquality',
          name: 'Report air quality issues.',
          text: 'Your observations can help scientists improve<br>air quality.',
          localOrg: 'Scientists at the <span class="bodyBold">Allegheny County Department of Health</span> need your help to collect data on air quality. With the <span class="bodyBold">Smell Pittsburgh</span> mobile phone app designed by the CREATE Lab at Carnegie Mellon University, you contribute to a citizen science project that will help improve air quality.',
        },
      ]
    },
    'energy' : {
      name: 'Energy',
      icon: 'energy_icon.png',
      actions: [
        {
          id: 'energyaudit',
          name: 'Do an energy audit.',
          text: 'Small changes in your home (like closing shades<br>on sunny days) can save money on energy bills.',
          localOrg: '<span class="bodyBold">Conservation Consultants Inc.</span> is a nonprofit that helps homeowners and small businesses address environmental concerns. The Home Energy Saver project can be used for a DIY evaluation. Every kilowatt we save counts in a region that relies on fossil fuels for much of our energy.',
        },
        {
          id: 'renewable',
          name: 'Support renewable energy.',
          text: 'Learn more about alternative energy options that<br>are available to you.',
          localOrg: 'Solar power generates energy without carbon emissions, and creates local jobs. Anyone who pays an electric bill can opt in to plans that source electricity from renewable sources. Ask your <span class="bodyBold">local electricity supplier</span> or learn more from <span class="bodyBold">PA PowerSwitch.</span>',
        },
        {
          id: 'reuse',
          name: 'Try reuse.',
          text: 'Instead of using energy to make something new, upcycle materials for your next project. ',
          localOrg: 'Find a donation center to take your old materials and provide a starter for something new. <span class="bodyBold">Construction Junction</span> has materials for home renovation, and <span class="bodyBold">Pittsburgh Center for Creative Reuse</span> deals with craft supplies for small creative projects.',
        },
      ]
    },
    'food' : {
      name: 'Food',
      icon: 'food_icon.png',
      actions: [
        {
          id: 'beef',
          name: 'Eat less beef.',
          text: 'Eating plant-based meals instead of a burger<br>can reduce your carbon footprint.',
          localOrg: 'When you think about the energy, water, and fertilizer that go into meat production, the environmental impact really adds up. Grow your own food or visit a <span class="bodyBold">local farmer’s markets</span> to find affordable seasonal produce and show support for sustainable agriculture.',
        },
        {
          id: 'foodwaste',
          name: 'Reduce food waste.',
          text: 'Use the Food Rescue Hero app to get your<br>leftover food to someone who needs it.',
          localOrg: 'Did you order too much for an office meeting or special event? Fight hunger by sharing leftovers with those in need. <span class="bodyBold">412 Food Rescue</span> has a variety of programs to redirect fresh food from landfills to organizations that address hunger.',
        },
        {
          id: 'soil',
          name: 'Improve my soil.',
          text: 'Try composting to reduce greenhouse gasses<br>and help plants grow.',
          localOrg: 'When organic materials decompose in landfill environments that lack oxygen, it creates methane gas that contributes to global warming. <span class="bodyBold">The Pennsylvania Resources Council</span> offers low-cost classes on composting that include all required start-up materials. You can compost in your apartment or outdoors: less landfill waste benefits everyone.',
        },
      ]
    },
    'water' : {
      name: 'Water',
      icon: 'water_icon.png',
      actions: [
        {
          id: 'tree',
          name: 'Plant a tree.',
          text: 'Trees provide shade, look great, and help prevent sewer system overflows.',
          localOrg: 'One tree can soak up 100 gallons of water. Collectively, the trees across an urban landscape can keep a significant amount of water out of the sewer system. <span class="bodyBold">Tree Pittsburgh</span> is dedicated to enhancing community vitality by restoring and protecting the urban forest.',
        },
        {
          id: 'kayaking',
          name: 'Try Kayaking.',
          text: 'River recreation motivates people, businesses,<br>and government to keep our rivers clean.',
          localOrg: 'Riverfront access has never been better. By taking part in the many activities available along Pittsburgh’s waterfront, you show those in local government what is important to its people, and where money should be invested for further improvements.',
        },
        {
          id: 'plastics',
          name: 'Replace plastics with reusables.',
          text: 'Use a refillable water bottle or take your own<br>bags to the grocery store.',
          localOrg: 'Our local rivers are part of a much larger watershed. Disposable plastics like bottles and straws end up in our waterways and will eventually flow to the Mississippi River and into the Gulf of Mexico. We may think of ourselves as landlocked, but our trash can end up in the ocean.',
        },
      ]
    },
    'habitat' : {
      name: 'Habitat',
      icon: 'habitat_icon.png',
      actions: [
        {
          id: 'birds',
          name: 'Help birds.',
          text: 'Learn about techniques to minimize bird-building collisions.',
          localOrg: 'Birds can thrive in cities, but sometimes have fatal collisions with reflective glass on buildings. <span class="bodyBold">BirdSafe Pittsburgh</span> coordinates local research efforts to reduce bird-glass collisions and increase healthy habitats for birds.',
        },
        {
          id: 'nativeplants',
          name: 'Grow native plants.',
          text: 'Gardening with plants that are suited to your soil saves money by decreasing the need for watering.',
          localOrg: 'Native plants create food and shelter for local wildlife including birds, butterflies, and beneficial insects. Your garden is part of a larger habitat, including parks and land trusts, creating green corridors that support migrating wildlife.',
        },
        {
          id: 'hike',
          name: 'Take a hike.',
          text: 'Show support for local green spaces by exploring recreation in local parks.',
          localOrg: 'There are hundreds of miles of hiking and biking trails to explore in city, county, and state parks. Your support for green public lands has additional benefits including more habitat for wildlife, protection for watersheds, and relief from urban heat islands.',
        },
      ]
    },
  }