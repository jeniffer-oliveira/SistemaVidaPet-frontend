import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaInicialComponent } from './components/pages/adm/pagina-inicial/pagina-inicial.component';
import { FuncionariosComponent } from './components/pages/adm/funcionarios/funcionarios.component';
import { ClientesComponent } from './components/pages/adm/clientes/clientes.component';
import { ServicosComponent } from './components/pages/adm/servicos/servicos.component';
import { NovaConsultaComponent } from './components/pages/funcionarios/nova-consulta/nova-consulta.component';
import { AgendarConsultaComponent } from './components/pages/cliente/agendar-consulta/agendar-consulta.component';
import { HistoricoComponent } from './components/pages/cliente/historico/historico.component';
import { PagamentosComponent } from './components/pages/funcionarios/pagamentos/pagamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PaginaInicialComponent,
    FuncionariosComponent,
    ClientesComponent,
    ServicosComponent,
    NovaConsultaComponent,
    AgendarConsultaComponent,
    HistoricoComponent,
    PagamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
