import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientesAdmComponent } from './components/pages/adm/clientes-adm/clientes.component';
import { FuncionariosComponent } from './components/pages/adm/funcionarios-adm/funcionarios.component';
import { PaginaInicialComponent } from './components/pages/adm/pagina-inicial/pagina-inicial.component';
import { ServicosComponent } from './components/pages/adm/servicos/servicos.component';
import { AgendarConsultaComponent } from './components/pages/cliente/agendar-consulta/agendar-consulta.component';
import { HistoricoComponent } from './components/pages/cliente/historico/historico.component';
import { ClientesComponent } from './components/pages/funcionarios/clientes-func/clientes.component';
import { NovaConsultaComponent } from './components/pages/funcionarios/nova-consulta/nova-consulta.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'clientes-adm', component: ClientesAdmComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'agendar-consulta', component: AgendarConsultaComponent},
  {path: 'historico', component: HistoricoComponent},
  {path: 'clientes-func', component: ClientesComponent},
  {path: 'nova-consulta', component: NovaConsultaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
