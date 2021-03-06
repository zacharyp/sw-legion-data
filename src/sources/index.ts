import { Source } from '../types/source';

export default sources;

export const sources: Source[] = [
  {
    ldf: 'legioncoreset',
    name: 'Legion Core Set',
    wave: 0,
    released: true,
    contents: {
      units: {
        lukeskywalker: 1,
        darthvader: 1,
        rebeltroopers: 2,
        stormtroopers: 2,
        atrt: 1,
        '74zspeederbikes': 1,
      },
      upgrades: {
        longrangecomlink: 2,
        battlemeditation: 2,
        forcechoke: 1,
        forcepush: 2,
        forcereflexes: 2,
        jedimindtrick: 1,
        saberthrow: 2,
        targetingscopes: 4,
        concussiongrenades: 4,
        atrtlasercannon: 1,
        atrtflamethrower: 1,
        atrtrotaryblaster: 1,
        dlt19stormtrooper: 2,
        hh12stormtrooper: 2,
        mpl57iontrooper: 2,
        z6trooper: 2,
        rebeltrooper: 2,
        stormtrooper: 2,
      },
    },
  },
  {
    ldf: 'atrtunit',
    name: 'AT-RT Unit',
    wave: 1,
    released: true,
    contents: {
      units: {
        atrt: 1,
      },
      upgrades: {
        longrangecomlink: 1,
        commsjammer: 1,
        atrtlasercannon: 1,
        atrtflamethrower: 1,
        atrtrotaryblaster: 1,
      },
    },
  },
  {
    ldf: 'rebeltroopersunit',
    name: 'Rebel Troopers Unit',
    wave: 1,
    released: true,
    contents: {
      units: {
        rebeltroopers: 1,
      },
      upgrades: {
        mpl57iontrooper: 1,
        z6trooper: 1,
        rebeltrooper: 1,
        grapplinghooks: 1,
        targetingscopes: 1,
        impactgrenades: 1,
        concussiongrenades: 1,
      },
    },
  },
  {
    ldf: '74zspeederbikesunit',
    name: '74-Z Speeder Bikes Unit',
    wave: 1,
    released: true,
    contents: {
      units: {
        '74zspeederbikes': 1,
      },
      upgrades: {
        commsjammer: 1,
        longrangecomlink: 1,
      },
    },
  },
  {
    ldf: 'stormtroopersunit',
    name: 'Stormtroopers Unit',
    wave: 1,
    released: true,
    contents: {
      units: {
        stormtroopers: 1,
      },
      upgrades: {
        grapplinghooks: 1,
        impactgrenades: 1,
        dlt19stormtrooper: 1,
        hh12stormtrooper: 1,
        stormtrooper: 1,
        targetingscopes: 1,
        concussiongrenades: 1,
      },
    },
  },
  {
    ldf: 't47airspeederunit',
    name: 'T-47 Airspeeder Unit',
    wave: 1,
    released: true,
    contents: {
      units: {
        t47airspeeder: 1,
      },
      upgrades: {
        longrangecomlink: 1,
        commsjammer: 1,
        ax108groundbuzzer: 1,
        modkpowerharpoon: 1,
        wedgeantilles: 1,
      },
    },
  },
  {
    ldf: 'atstunit',
    name: 'AT-ST Unit',
    wave: 1,
    released: true,
    contents: {
      units: {
        atst: 1,
      },
      upgrades: {
        longrangecomlink: 1,
        commsjammer: 1,
        '88twinlightblastercannon': 1,
        atstmortarlauncher: 1,
        dw3concussiongrenadelauncher: 1,
        generalweiss: 1,
      },
    },
  },
  {
    ldf: 'snowtroopersunit',
    name: 'Snowtroopers Unit',
    wave: 2,
    released: true,
    contents: {
      units: {
        snowtroopers: 1,
      },
      upgrades: {
        targetingscopes: 1,
        concussiongrenades: 1,
        grapplinghooks: 1,
        impactgrenades: 1,
        snowtrooper: 1,
        flametrooper: 1,
        t7ionsnowtrooper: 1,
      },
    },
  },
  {
    ldf: 'generalveerscommander',
    name: 'General Veers Commander',
    wave: 2,
    released: true,
    contents: {
      units: {
        generalveers: 1,
      },
      upgrades: {
        commandingpresence: 1,
        esteemedleader: 1,
        environmentalgear: 1,
      },
    },
  },
  {
    ldf: 'fleettroopersunit',
    name: 'Fleet Troopers Unit',
    wave: 2,
    released: true,
    contents: {
      units: {
        fleettroopers: 1,
      },
      upgrades: {
        targetingscopes: 1,
        concussiongrenades: 1,
        grapplinghooks: 1,
        impactgrenades: 1,
        fleettrooper: 1,
        mpl57barragetrooper: 1,
        scatterguntrooper: 1,
      },
    },
  },
  {
    ldf: 'leiaorganacommander',
    name: 'Leia Organa Commander',
    wave: 2,
    released: true,
    contents: {
      units: {
        leiaorgana: 1,
      },
      upgrades: {
        commandingpresence: 1,
        esteemedleader: 1,
        environmentalgear: 1,
      },
    },
  },
  {
    ldf: 'rebelcommandosunit',
    name: 'Rebel Commandos Unit',
    wave: 3,
    released: true,
    contents: {
      units: {
        rebelcommandos: 1,
        rebelcommandosstriketeam: 1,
      },
      upgrades: {
        duckandcover: 1,
        hquplink: 1,
        emergencystims: 1,
        protonchargesaboteur: 1,
        dh447sniper: 1,
      },
    },
  },
  {
    ldf: 'hansolocommander',
    name: 'Han Solo Commander',
    wave: 3,
    released: true,
    contents: {
      units: {
        hansolo: 1,
      },
      upgrades: {
        improvisedorders: 1,
        duckandcover: 1,
        emergencystims: 1,
      },
    },
  },
  {
    ldf: 'scouttroopersunit',
    name: 'Scout Troopers Unit',
    wave: 3,
    released: true,
    contents: {
      units: {
        scouttroopers: 1,
        scouttroopersstriketeam: 1,
      },
      upgrades: {
        duckandcover: 1,
        hquplink: 1,
        emergencystims: 1,
        sonicchargesaboteur: 1,
        dlt19xsniper: 1,
      },
    },
  },
  {
    ldf: 'bobafettoperative',
    name: 'Boba Fett Operative',
    wave: 3,
    released: true,
    contents: {
      units: {
        bobafett: 1,
      },
      upgrades: {
        hunter: 1,
        emergencystims: 1,
        duckandcover: 1,
      },
    },
  },
  {
    ldf: 'ewebheavyblasterteamunit',
    name: 'E-Web Heavy Blaster Team Unit',
    wave: 3,
    released: true,
    contents: {
      units: {
        ewebheavyblasterteam: 1,
      },
      upgrades: {
        hquplink: 1,
        overchargedgenerator: 1,
        barragegenerator: 1,
      },
    },
  },
  {
    ldf: '14fdlasercannonteamunit',
    name: '1.4 FD Laser Cannon Unit',
    wave: 3,
    released: true,
    contents: {
      units: {
        '14fdlasercannonteam': 1,
      },
      upgrades: {
        hquplink: 1,
        overchargedgenerator: 1,
        barragegenerator: 1,
      },
    },
  },
  {
    ldf: 'emperorpalpatinecommander',
    name: 'Emperor Palpatine Commander',
    wave: 4,
    released: true,
    contents: {
      units: {
        emperorpalpatine: 1,
      },
      upgrades: {
        anger: 1,
        forcechoke: 1,
        improvisedorders: 1,
      },
    },
  },
  {
    ldf: 'imperialroyalguardsunit',
    name: 'Imperial Royal Guards Unit',
    wave: 4,
    released: true,
    contents: {
      units: {
        imperialroyalguards: 1,
      },
      upgrades: {
        reconintel: 1,
        fragmentationgrenades: 1,
        electrostaffguard: 1,
        tenacity: 1,
        hunter: 1,
      },
    },
  },
  {
    ldf: 'wookieewarriorsunit',
    name: 'Wookiee Warriors Unit',
    wave: 4,
    released: true,
    contents: {
      units: {
        wookieewarriors: 1,
      },
      upgrades: {
        reconintel: 1,
        fragmentationgrenades: 1,
        bowcasterwookiee: 1,
        tenacity: 1,
        hunter: 1,
      },
    },
  },
  {
    ldf: 'chewbaccaoperative',
    name: 'Chewbacca Operative',
    wave: 4,
    released: true,
    contents: {
      units: {
        chewbacca: 1,
      },
      upgrades: {
        emergencystims: 1,
        tenacity: 1,
        hunter: 1,
      },
    },
  },
  {
    ldf: 'rebelspecialistspersonnel',
    name: 'Rebel Specialists Personnel',
    wave: 5,
    released: true,
    contents: {
      units: {
        rebelofficer: 1,
      },
      upgrades: {
        commandingpresence: 1,
        commsrelay: 1,
        reconintel: 1,
        rebelofficer: 1,
        rebelcommstechnician: 1,
        r5astromechdroid: 1,
        '21bmedicaldroid': 1,
      },
    },
  },
  {
    ldf: 'imperialspecialistspersonnel',
    name: 'Imperial Specialists Personnel',
    wave: 5,
    released: true,
    contents: {
      units: {
        imperialofficer: 1,
      },
      upgrades: {
        commandingpresence: 1,
        commsrelay: 1,
        reconintel: 1,
        imperialofficer: 1,
        imperialcommstechnician: 1,
        r4astromechdroid: 1,
        fx9medicaldroid: 1,
      },
    },
  },
  {
    ldf: 'jynersocommander',
    name: 'Jyn Erso Commander',
    wave: 5,
    released: true,
    contents: {
      units: {
        jynerso: 1,
      },
      upgrades: {
        strictorders: 1,
        reconintel: 1,
        a180rifleconfig: 1,
        a180pistolconfig: 1,
        duckandcover: 1,
      },
    },
  },
  {
    ldf: 'rebelpathfindersunit',
    name: 'Rebel Pathfinders Unit',
    wave: 5,
    released: true,
    contents: {
      units: {
        rebelpathfinders: 1,
      },
      upgrades: {
        commsrelay: 1,
        fragmentationgrenades: 1,
        bistan: 1,
        pao: 1,
        duckandcover: 1,
        overwatch: 1,
        a300longrangeconfig: 1,
        a300shortrangeconfig: 1,
      },
    },
  },
  {
    ldf: 'directororsonkrenniccommander',
    name: 'Director Orson Krennic Commander',
    wave: 5,
    released: true,
    contents: {
      units: {
        directororsonkrennic: 1,
      },
      upgrades: {
        strictorders: 1,
        esteemedleader: 1,
        reconintel: 1,
      },
    },
  },
  {
    ldf: 'imperialdeathtroopersunit',
    name: 'Imperial Death Troopers Unit',
    wave: 5,
    released: true,
    contents: {
      units: {
        imperialdeathtroopers: 1,
      },
      upgrades: {
        e11dgrenadelauncherconfig: 1,
        e11dfocusedfireconfig: 1,
        commsrelay: 1,
        environmentalgear: 1,
        fragmentationgrenades: 1,
        dtf16: 1,
        dlt19dtrooper: 1,
        duckandcover: 1,
        overwatch: 1,
      },
    },
  },
  {
    ldf: 'tx225gavwoccupiercombatassaulttankunit',
    name: 'TX-225 GAVw Occupier Combat Assault Tank Unit',
    wave: 6,
    released: true,
    contents: {
      units: {
        tx225gavwoccupiercombatassaulttank: 1,
      },
      upgrades: {
        hquplink: 1,
        dlt19riflepintle: 1,
        rt97criflepintle: 1,
        firstsergeantarbmab: 1,
        imperialhammerselitearmorpilot: 1,
      },
    },
  },
  {
    ldf: 'x34landspeederunit',
    name: 'X-34 Landspeeder Unit',
    wave: 6,
    released: true,
    contents: {
      units: {
        x34landspeeder: 1,
      },
      upgrades: {
        hquplink: 1,
        markiimediumblaster: 1,
        m45ionblaster: 1,
        ryderazadi: 1,
        outerrimspeederjockey: 2,
      },
    },
  },
  {
    ldf: 'sabinewrenoperative',
    name: 'Sabine Wren Operative',
    wave: 6,
    released: true,
    contents: {
      units: {
        sabinewren: 1,
      },
      upgrades: {
        endurance: 1,
        thedarksaber: 1,
        electrograpplingline: 1,
        personalcombatshield: 1,
      },
    },
  },
  {
    ldf: 'bosskoperative',
    name: 'Bossk Operative',
    wave: 6,
    released: true,
    contents: {
      units: {
        bossk: 1,
      },
      upgrades: {
        endurance: 1,
        hunter: 1,
        emergencystims: 1,
      },
    },
  },
  {
    ldf: 'rebelveteransunit',
    name: 'Rebel Veterans Unit',
    wave: 7,
    released: true,
    contents: {
      units: {
        rebelveterans: 1,
        markiimediumblastertrooper: 1,
      },
      upgrades: {
        environmentalgear: 1,
        cmo93trooper: 1,
        rebelveteran: 1,
        endurance: 1,
        overwatch: 1,
      },
    },
  },
  {
    ldf: 'tauntaunridersunit',
    name: 'Tauntaun Riders Unit',
    wave: 7,
    released: true,
    contents: {
      units: {
        tauntaunriders: 1,
      },
      upgrades: {
        commsjammer: 1,
        endurance: 1,
        tenacity: 1,
      },
    },
  },
  {
    ldf: 'imperialshoretroopersunit',
    name: 'Imperial Shoretroopers Unit',
    wave: 7,
    released: true,
    contents: {
      units: {
        shoretroopers: 1,
        df90mortartrooper: 1,
      },
      upgrades: {
        endurance: 1,
        environmentalgear: 1,
        overwatch: 1,
        t21btrooper: 1,
        shoretrooper: 1,
      },
    },
  },
  {
    ldf: 'clonewarscoreset',
    name: 'Clone Wars Core Set',
    wave: 7,
    released: true,
    contents: {
      units: {
        b1battledroids: 2,
        generalgrievous: 1,
        droidekas: 1,
        obiwankenobi: 1,
        barcspeeder: 1,
        phaseiclonetroopers: 2,
      },
      upgrades: {
        hope: 1,
        tenacity: 1,
        forceguidance: 1,
        barctwinlasergunner: 1,
        barcrps6gunner: 1,
        barciongunner: 1,
        phaseiclonetrooper: 2,
        dc15phaseitrooper: 2,
        z6phaseitrooper: 2,
        dt57annihilator: 1,
        hunter: 1,
        aggressivetactics: 1,
        b1battledroid: 2,
        e5cb1trooper: 2,
        e60rb1trooper: 2,
        hquplink: 2,
      },
    },
  },
  {
    ldf: 'phaseiclonetroopersunit',
    name: 'Phase I Clone Troopers Unit',
    wave: 7,
    released: true,
    contents: {
      units: {
        phaseiclonetroopers: 1,
      },
      upgrades: {
        smokegrenades: 1,
        dc15phaseitrooper: 1,
        z6phaseitrooper: 1,
        phaseiclonetrooper: 1,
      },
    },
  },
  {
    ldf: 'b1battledroidsunit',
    name: 'B1 Battle Droids Unit',
    wave: 7,
    released: true,
    contents: {
      units: {
        b1battledroids: 1,
      },
      upgrades: {
        electrobinoculars: 1,
        e5cb1trooper: 1,
        e60rb1trooper: 1,
        b1battledroid: 1,
      },
    },
  },
  {
    ldf: 'countdookucommander',
    name: 'Count Dooku Commander',
    wave: 7,
    released: true,
    contents: {
      units: {
        countdooku: 1,
      },
      upgrades: {
        esteemedleader: 1,
        anger: 1,
        fear: 1,
        forcechoke: 1,
      },
    },
  },
  {
    ldf: 'clonecaptainrexcommander',
    name: 'Clone Captain Rex Commander',
    wave: 7,
    released: true,
    contents: {
      units: {
        clonecaptainrex: 1,
      },
      upgrades: {
        esteemedleader: 1,
        emergencystims: 1,
        reconintel: 1,
        smokegrenades: 1,
        endurance: 1,
      },
    },
  },
  {
    ldf: 'dewbackriderunit',
    name: 'Dewback Rider Unit',
    wave: 6,
    released: true,
    contents: {
      units: {
        dewbackrider: 1,
      },
      upgrades: {
        t21blasterrifle: 1,
        rt97cblasterrifle: 1,
        cr24flamerifle: 1,
        commsjammer: 1,
        endurance: 1,
        tenacity: 1,
      },
    },
  },
  {
    ldf: 'imperialstormtroopersupgrade',
    name: 'Imperial Stormtroopers Upgrade',
    wave: 8,
    released: true,
    contents: {
      units: {},
      upgrades: {
        t21stormtrooper: 1,
        rt97cstormtrooper: 1,
        stormtroopercaptain: 1,
        stormtrooperspecialist: 1,
        smokegrenades: 1,
        offensivepush: 1,
      },
    },
  },
  {
    ldf: 'rebeltroopersupgrade',
    name: 'Rebel Troopers Upgrade',
    wave: 8,
    released: true,
    contents: {
      units: {},
      upgrades: {
        sx21trooper: 1,
        dlt20atrooper: 1,
        rebeltroopercaptain: 1,
        rebeltrooperspecialist: 1,
        smokegrenades: 1,
        offensivepush: 1,
      },
    },
  },
  {
    ldf: 'b1battledroidsupgrade',
    name: 'B1 Battle Droids Upgrade',
    wave: 8,
    released: true,
    contents: {
      units: {},
      upgrades: {
        radiationcannonb1trooper: 1,
        e5sb1trooper: 1,
        oomseriesbattledroid: 1,
        b1securitydroid: 1,
        commsrelay: 1,
        integratedcommsattenna: 1,
      },
    },
  },
  {
    ldf: 'phaseiclonetroopersupgrade',
    name: 'Phase I Clone Troopers Upgrade',
    wave: 8,
    released: true,
    contents: {
      units: {},
      upgrades: {
        rps6phaseitrooper: 1,
        dp23phaseitrooper: 1,
        phaseiclonespecialist: 1,
        phaseiclonecaptain: 1,
        electrobinoculars: 1,
        targetingscopes: 1,
        smokegrenades: 1,
      },
    },
  },
  {
    ldf: 'crashedescapepodbattlefield',
    name: 'Crashed Escape Pod Battlefield',
    wave: 8,
    released: true,
    contents: {
      units: {
        r2d2: 1,
        c3po: 1,
      },
      upgrades: {
        blastoff: 1,
        impromptuimmolation: 1,
        smokescreen: 1,
        integratedcommsattenna: 1,
      },
    },
  },
  {
    ldf: 'lukeskywalker-operative',
    name: 'Luke Skywalker (Operative)',
    wave: 8,
    released: true,
    contents: {
      units: {
        'lukeskywalker-operative': 1,
      },
      upgrades: {
        forceguidance: 1,
        hope: 1,
        tenacity: 1,
        endurance: 1,
        youserveyourmasterwell: 1,
        fullofsuprises: 1,
        iamajedi: 1,
      },
    },
  },
  {
    ldf: 'darthvader-operative',
    name: 'Darth Vader (Operative)',
    wave: 8,
    released: true,
    contents: {
      units: {
        'darthvader-operative': 1,
      },
      upgrades: {
        forceguidance: 1,
        fear: 1,
        tenacity: 1,
        endurance: 1,
        vadersmight: 1,
        fearanddeadmen: 1,
        darknessdescends: 1,
      },
    },
  },
  {
    ldf: 'cassianandorandk2SOcommander',
    name: 'Cassian Andor and K-2SO Commander',
    wave: 8,
    released: false,
    contents: {
      units: {
        cassianandor: 1,
        k2so: 1,
      },
      upgrades: {
        crackshot: 1,
        sacrifice: 1,
        laststand: 1,
        volunteermission: 1,
        a280cfesniperconfig: 1,
        a280cfepistolconfig: 1,
        jynsse14blaster: 1,
        duckandcover: 1,
        hunter: 1,
      },
    },
  },
  {
    ldf: 'idenversioandid10commander',
    name: 'Iden Versio and ID10 Commander ',
    wave: 8,
    released: false,
    contents: {
      units: {
        idenversio: 1,
        id10: 1,
      },
      upgrades: {
        idensdlt20arifle: 1,
        idenstl50repeater: 1,
        overwatch: 1,
        hunter: 1,
        offensivepush: 1,
        pulsescan: 1,
        concussiveblast: 1,
        tacticalstrike: 1,
        incapacitate: 1,
      },
    },
  },
  {
    ldf: 'aattradefederationbattletank',
    name: 'AAT Trade Federation Battle Tank Unit Expansion',
    wave: 8,
    released: true,
    contents: {
      units: {
        aattradefederationbattletank: 1,
      },
      upgrades: {
        hquplink: 1,
        lokdurd: 1,
        oomseriesdroidpilot: 1,
        tseriestacticaldroidpilot: 1,
        bunkerbustershells: 1,
        highenergyshells: 1,
        armorpiercingshells: 1,
      },
    },
  },
  {
    ldf: 'tx130saberclassfightertank',
    name: 'TX-130 Saber-class Fighter Tank Unit Expansion',
    wave: 8,
    released: true,
    contents: {
      units: {
        tx130saberclassfightertank: 1,
      },
      upgrades: {
        hquplink: 1,
        aaylasecura: 1,
        plokoon: 1,
        veteranclonepilot: 1,
        bunkerbustershells: 1,
        highenergyshells: 1,
        armorpiercingshells: 1,
        tx130beamcannonturret: 1,
        tx130twinlaserturret: 1,
      },
    },
  },
  {
    ldf: 'b2superbattlebattledroids',
    name: 'B2 Super Battle Droids Unit Expansion',
    wave: 8,
    released: true,
    contents: {
      units: {
        b2superbattlebattledroids: 1,
      },
      upgrades: {
        hquplink: 1,
        integratedcommsattenna: 1,
        b2acmtrooper: 1,
        b2hatrooper: 1,
        b2superbattledroid: 1,
      },
    },
  },
  {
    ldf: 'phaseiiclonetroopers',
    name: 'Phase II Clone Troopers Unit Expansion',
    wave: 8,
    released: true,
    contents: {
      units: {
        phaseiiclonetroopers: 1,
      },
      upgrades: {
        grapplinghooks: 1,
        impactgrenades: 1,
        overwatch: 1,
        phaseiimortartrooper: 1,
        z6phaseiitrooper: 1,
        phaseiiclonetrooper: 1,
      },
    },
  },
];
