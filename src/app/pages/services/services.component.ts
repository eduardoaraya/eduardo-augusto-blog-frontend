import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  serviceList = [
    {
      title: 'Aulas Particulares',
      active: '',
      items: [
        {
          title: 'Inglês',
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          title: 'Português para estrangeiros (PLE)',
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          title: 'Francês (FLE)',
          content:
            'Aliquam imperdiet massa in mauris blandit egestas. Vestibulum pharetra pretium quam, eget ultrices arcu pulvinar id. In finibus ornare sapien sed facilisis. Duis mi ante, vehicula quis faucibus in, venenatis ac magna. ',
        },
        {
          title: 'Português para fins espefícicos (para brasileiros)',
          content:
            'Proin scelerisque dictum egestas. Maecenas gravida lectus vel eleifend lacinia. Quisque at aliquet massa. Aenean ut nulla in odio ultrices convallis sed vitae dolor. Nullam dictum sit amet ex eu posuere. ',
        },
      ],
    },
    {
      title: 'Outros Serviços',
      active: '',
      items: [
        {
          title: 'Revisão textual',
          content:
            'Aliquam imperdiet massa in mauris blandit egestas. Vestibulum pharetra pretium quam, eget ultrices arcu pulvinar id. In finibus ornare sapien sed facilisis. Duis mi ante, vehicula quis faucibus in, venenatis ac magna. ',
        },
        {
          title: 'Normalização de textos (ABNT)',
          content:
            'Aliquam imperdiet massa in mauris blandit egestas. Vestibulum pharetra pretium quam, eget ultrices arcu pulvinar id. In finibus ornare sapien sed facilisis. Duis mi ante, vehicula quis faucibus in, venenatis ac magna. ',
        },
        {
          title: 'Tradução',
          content:
            'Proin scelerisque dictum egestas. Maecenas gravida lectus vel eleifend lacinia. Quisque at aliquet massa. Aenean ut nulla in odio ultrices convallis sed vitae dolor. Nullam dictum sit amet ex eu posuere. ',
        },
      ],
    },
  ];

  constructor() {}
  ngOnInit(): void {}

  active(service: any, item: any) {
    service.active = item.title;
  }
}
