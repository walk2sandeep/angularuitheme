import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { CustomMaterialComponent } from './custom-material/custom-material.component';

import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import { IconsComponent } from './icons/icons.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      
      {
        path: 'custom-material',
        component: CustomMaterialComponent,
        data: {
          title: 'Custom Material'
        }
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'icons',
        component: IconsComponent,
        data: {
          title: 'Icons'
        }
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Table'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
