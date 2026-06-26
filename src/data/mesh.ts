// The career, as a mesh - nodes + edges rendered on the hero canvas.
export type MeshNode = {
  id: string;
  label: string;
  note?: string;
  kind: string;
  x: number;
  y: number;
  r: number;
  sub: string;
  date: string;
  tags: string[];
  url?: string;
};

export const NODES: MeshNode[] = [
  { id:'you', label:'Deepakumar', kind:'hub',  x:0.26, y:0.50, r:13,
    sub:'Senior Software Engineer & AWS Solutions Architect. Building secure, scalable cloud-native systems in Go.',
    date:'7 years', tags:['Golang','AWS','Serverless','IoT','Product'] },

  { id:'tuskira', label:'Tuskira', note:'Sr Engineer · ’25', kind:'work·now', x:0.30, y:0.13, r:10,
    sub:'Senior Software Engineer', date:'Aug 2025 -',
    tags:['Microservices','AWS','Cybersecurity','GenAI'], url:'https://www.tuskira.ai/' },
  { id:'esp3', label:'Espressif', note:'Sr Cloud Backend · ’24', kind:'work', x:0.16, y:0.18, r:9,
    sub:'Senior Cloud Backend Engineer', date:'Jan 2024 - Jul 2025',
    tags:['Serverless','Cloud Architecture','Matter IoT','Cost Opt'], url:'https://www.espressif.com/' },
  { id:'csa', label:'CSA', note:'Vice Chair, SDTT · ’23', kind:'leadership', x:0.42, y:0.20, r:9,
    sub:'Vice Chair of SDTT - Connectivity Standards Alliance', date:'Oct 2023 - Jul 2025',
    tags:['Leadership','Security','Matter IoT'], url:'https://csa-iot.org/' },
  { id:'esp2', label:'Espressif', note:'Cloud Backend · ’21', kind:'work', x:0.07, y:0.30, r:8,
    sub:'Cloud Backend Engineer', date:'Jul 2021 - Dec 2023',
    tags:['Serverless','Mentoring','Cloud Architecture','Matter IoT'], url:'https://www.espressif.com/' },
  { id:'esp1', label:'Espressif', note:'Associate · ’20', kind:'work', x:0.07, y:0.66, r:7,
    sub:'Associate Cloud Engineer', date:'Dec 2020 - Jun 2021',
    tags:['Golang','Python','AWS','Security'], url:'https://www.espressif.com/' },
  { id:'ubs', label:'UBS', note:'Software Dev · ’19', kind:'work', x:0.16, y:0.75, r:8,
    sub:'Software Developer', date:'Jul 2019 - Nov 2020',
    tags:['R','Risk Management','TeamCity','Puppet'], url:'https://www.ubs.com/in/en.html' },
  { id:'yoryo', label:'Yoryo', note:'Blockchain · intern', kind:'internship', x:0.10, y:0.86, r:6,
    sub:'Blockchain Developer (Internship)', date:'Jan 2019 - Mar 2019',
    tags:['Hyperledger Fabric','Node JS','Docker'] },

  { id:'pict', label:'PICT', note:'B.E. Computer Engg', kind:'education', x:0.25, y:0.67, r:8,
    sub:'B.E. Computer Engineering - Pune Institute of Computer Technology', date:'2015 - 2019',
    tags:['CGPA 8.88 / 10'], url:'https://pict.edu/' },
  { id:'robocon', label:'ABU Robocon', note:'AIR 14 / 106', kind:'competition', x:0.22, y:0.88, r:6,
    sub:'AIR 14 / 106 teams - National Level · PICT Robotics', date:'2017 - 2018',
    tags:['Embedded C++','Robotic Design'] },
  { id:'sih', label:'SIH 2019', note:'Runner Up', kind:'competition', x:0.34, y:0.84, r:6,
    sub:'Runner Up - Ministry of Textiles, Smart India Hackathon', date:'2019',
    tags:['Node JS','React JS','MongoDB'] },

  { id:'tlv', label:'TLV Parser', note:'Go · open source', kind:'project', x:0.45, y:0.31, r:7,
    sub:'A lightweight Go Tag-Length-Value encoder/decoder for memory-constrained IoT devices.', date:'Open Source',
    tags:['Go','IoT','Embedded'], url:'https://github.com/deepakumarvu/tlv_parser' },
  { id:'blog', label:'Matter & CRL', note:'Article', kind:'writing', x:0.44, y:0.66, r:6,
    sub:'How CRL and the Distributed Compliance Ledger protect the Matter ecosystem.', date:'Oct 2023',
    tags:['Article','Matter','Security'], url:'https://developer.espressif.com/blog/matter-and-certificate-revocation/' },
  { id:'gci', label:'GCI23 Talk', note:'Go testing', kind:'talk', x:0.42, y:0.78, r:6,
    sub:'Go Coverage in Integration Testing - flash talk at GCI23.', date:'Nov 2023',
    tags:['Talk','Go','Testing'], url:'https://www.youtube.com/watch?v=hyyDFiObmhE' },
  { id:'glaucoma', label:'Glaucoma CNN', note:'Research', kind:'project', x:0.35, y:0.70, r:6,
    sub:'Automated glaucoma detection using image processing and CNNs.', date:'Research',
    tags:['OpenCV','YOLO','AWS','Java'] },

  { id:'contact', label:'Get in touch', note:'Available', kind:'contact', x:0.46, y:0.88, r:9,
    sub:'Open to senior / staff roles, collaborations, and good conversations.', date:'Available',
    tags:['Email','LinkedIn','GitHub'], url:'mailto:deepakumarvu@gmail.com' },
];

export const EDGES: [string, string][] = [
  ['yoryo','ubs'],['ubs','esp1'],['esp1','esp2'],['esp2','esp3'],['esp3','tuskira'],
  ['csa','esp3'],
  ['you','esp2'],['you','tuskira'],['you','pict'],['you','contact'],['you','csa'],
  ['tlv','esp2'],['tlv','tuskira'],
  ['glaucoma','pict'],
  ['gci','esp3'],
  ['blog','csa'],['blog','esp3'],
  ['pict','robocon'],['pict','sih'],
  ['contact','tuskira'],
];
