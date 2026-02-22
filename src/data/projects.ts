export type Project = {
  name: string;
  description: string;
  demo?: string;
  github?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'TLV Parser',
    description:
      'A lightweight Go package implementing a Tag-Length-Value encoder/decoder optimised for memory-constrained and IoT devices. Handles structs via field tags, supports omitempty, and automatically splits values exceeding 255 bytes across multiple TLV blocks.',
    github: 'https://github.com/deepakumarvu/tlv_parser',
    tags: ['Go', 'IoT', 'Embedded', 'Open Source'],
  },
  {
    name: 'Automated Glaucoma Detection using CNN',
    description:
      'Detection of Glaucoma — one of the major causes of blindness — using image processing and convolutional neural networks.',
    tags: ['OpenCV', 'YOLO', 'AWS', 'Java'],
  },
];
