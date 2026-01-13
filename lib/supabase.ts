import { createClient } from '@supabase/supabase-js'

// Configurações do Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

// Cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos TypeScript para o banco de dados
export interface Database {
  public: {
    Tables: {
      // Tabela de Estabelecimentos
      estabelecimentos: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          nome: string
          cnpj: string
          email: string
          telefone: string
          endereco: string
          cidade: string
          estado: string
          cep: string
          tipo_estabelecimento: 'posto' | 'shopping' | 'hotel' | 'restaurante' | 'empresa' | 'outro'
          area_disponivel: number
          fluxo_veiculos_dia: number
          possui_energia_trifasica: boolean
          investimento_estimado: number
          retorno_esperado_meses: number
          observacoes?: string
          status: 'ativo' | 'inativo' | 'em_analise' | 'aprovado' | 'rejeitado'
          score_ia?: number
          analise_ia?: string
          dados_ocultos: boolean
          user_id?: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          nome: string
          cnpj: string
          email: string
          telefone: string
          endereco: string
          cidade: string
          estado: string
          cep: string
          tipo_estabelecimento: 'posto' | 'shopping' | 'hotel' | 'restaurante' | 'empresa' | 'outro'
          area_disponivel: number
          fluxo_veiculos_dia: number
          possui_energia_trifasica: boolean
          investimento_estimado: number
          retorno_esperado_meses: number
          observacoes?: string
          status?: 'ativo' | 'inativo' | 'em_analise' | 'aprovado' | 'rejeitado'
          score_ia?: number
          analise_ia?: string
          dados_ocultos?: boolean
          user_id?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          nome?: string
          cnpj?: string
          email?: string
          telefone?: string
          endereco?: string
          cidade?: string
          estado?: string
          cep?: string
          tipo_estabelecimento?: 'posto' | 'shopping' | 'hotel' | 'restaurante' | 'empresa' | 'outro'
          area_disponivel?: number
          fluxo_veiculos_dia?: number
          possui_energia_trifasica?: boolean
          investimento_estimado?: number
          retorno_esperado_meses?: number
          observacoes?: string
          status?: 'ativo' | 'inativo' | 'em_analise' | 'aprovado' | 'rejeitado'
          score_ia?: number
          analise_ia?: string
          dados_ocultos?: boolean
          user_id?: string
        }
      }
      
      // Tabela de Investidores
      investidores: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          nome: string
          email: string
          telefone: string
          cpf_cnpj: string
          tipo_investidor: 'pessoa_fisica' | 'pessoa_juridica' | 'fundo' | 'empresa'
          capital_disponivel: number
          ticket_minimo: number
          ticket_maximo: number
          regioes_interesse: string[]
          tipos_estabelecimento_interesse: string[]
          retorno_minimo_esperado: number
          prazo_investimento_meses: number
          experiencia_investimento: 'iniciante' | 'intermediario' | 'avancado'
          status: 'ativo' | 'inativo' | 'pendente' | 'aprovado'
          plano: 'basico' | 'premium' | 'enterprise'
          data_vencimento_plano?: string
          user_id?: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          nome: string
          email: string
          telefone: string
          cpf_cnpj: string
          tipo_investidor: 'pessoa_fisica' | 'pessoa_juridica' | 'fundo' | 'empresa'
          capital_disponivel: number
          ticket_minimo: number
          ticket_maximo: number
          regioes_interesse: string[]
          tipos_estabelecimento_interesse: string[]
          retorno_minimo_esperado: number
          prazo_investimento_meses: number
          experiencia_investimento: 'iniciante' | 'intermediario' | 'avancado'
          status?: 'ativo' | 'inativo' | 'pendente' | 'aprovado'
          plano?: 'basico' | 'premium' | 'enterprise'
          data_vencimento_plano?: string
          user_id?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          nome?: string
          email?: string
          telefone?: string
          cpf_cnpj?: string
          tipo_investidor?: 'pessoa_fisica' | 'pessoa_juridica' | 'fundo' | 'empresa'
          capital_disponivel?: number
          ticket_minimo?: number
          ticket_maximo?: number
          regioes_interesse?: string[]
          tipos_estabelecimento_interesse?: string[]
          retorno_minimo_esperado?: number
          prazo_investimento_meses?: number
          experiencia_investimento?: 'iniciante' | 'intermediario' | 'avancado'
          status?: 'ativo' | 'inativo' | 'pendente' | 'aprovado'
          plano?: 'basico' | 'premium' | 'enterprise'
          data_vencimento_plano?: string
          user_id?: string
        }
      }

      // Tabela de Conexões/Matches
      conexoes: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          estabelecimento_id: string
          investidor_id: string
          status: 'pendente' | 'aceita' | 'rejeitada' | 'em_negociacao' | 'finalizada'
          mensagem_inicial?: string
          data_contrato?: string
          valor_investimento?: number
          percentual_retorno?: number
          prazo_meses?: number
          observacoes?: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          estabelecimento_id: string
          investidor_id: string
          status?: 'pendente' | 'aceita' | 'rejeitada' | 'em_negociacao' | 'finalizada'
          mensagem_inicial?: string
          data_contrato?: string
          valor_investimento?: number
          percentual_retorno?: number
          prazo_meses?: number
          observacoes?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          estabelecimento_id?: string
          investidor_id?: string
          status?: 'pendente' | 'aceita' | 'rejeitada' | 'em_negociacao' | 'finalizada'
          mensagem_inicial?: string
          data_contrato?: string
          valor_investimento?: number
          percentual_retorno?: number
          prazo_meses?: number
          observacoes?: string
        }
      }

      // Tabela de Mensagens do Chat
      mensagens: {
        Row: {
          id: string
          created_at: string
          conexao_id: string
          remetente_id: string
          remetente_tipo: 'estabelecimento' | 'investidor'
          conteudo: string
          tipo: 'texto' | 'arquivo' | 'proposta' | 'contrato'
          arquivo_url?: string
          lida: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          conexao_id: string
          remetente_id: string
          remetente_tipo: 'estabelecimento' | 'investidor'
          conteudo: string
          tipo?: 'texto' | 'arquivo' | 'proposta' | 'contrato'
          arquivo_url?: string
          lida?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          conexao_id?: string
          remetente_id?: string
          remetente_tipo?: 'estabelecimento' | 'investidor'
          conteudo?: string
          tipo?: 'texto' | 'arquivo' | 'proposta' | 'contrato'
          arquivo_url?: string
          lida?: boolean
        }
      }

      // Tabela de Logs de Segurança
      logs_seguranca: {
        Row: {
          id: string
          created_at: string
          user_id: string
          user_tipo: 'estabelecimento' | 'investidor'
          acao: string
          ip_address: string
          user_agent: string
          detalhes?: string
          nivel_risco: 'baixo' | 'medio' | 'alto' | 'critico'
          bloqueado: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          user_tipo: 'estabelecimento' | 'investidor'
          acao: string
          ip_address: string
          user_agent: string
          detalhes?: string
          nivel_risco?: 'baixo' | 'medio' | 'alto' | 'critico'
          bloqueado?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          user_tipo?: 'estabelecimento' | 'investidor'
          acao?: string
          ip_address?: string
          user_agent?: string
          detalhes?: string
          nivel_risco?: 'baixo' | 'medio' | 'alto' | 'critico'
          bloqueado?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Funções auxiliares para interação com o banco

/**
 * Busca estabelecimentos com filtros
 */
export async function getEstabelecimentos(filters?: {
  cidade?: string
  estado?: string
  tipo?: string
  investimento_min?: number
  investimento_max?: number
  score_min?: number
}) {
  let query = supabase
    .from('estabelecimentos')
    .select('*')
    .eq('status', 'aprovado')
    .eq('dados_ocultos', false)

  if (filters?.cidade) {
    query = query.ilike('cidade', `%${filters.cidade}%`)
  }
  
  if (filters?.estado) {
    query = query.eq('estado', filters.estado)
  }
  
  if (filters?.tipo) {
    query = query.eq('tipo_estabelecimento', filters.tipo)
  }
  
  if (filters?.investimento_min) {
    query = query.gte('investimento_estimado', filters.investimento_min)
  }
  
  if (filters?.investimento_max) {
    query = query.lte('investimento_estimado', filters.investimento_max)
  }
  
  if (filters?.score_min) {
    query = query.gte('score_ia', filters.score_min)
  }

  return query
}

/**
 * Cria nova conexão entre estabelecimento e investidor
 */
export async function criarConexao(
  estabelecimento_id: string,
  investidor_id: string,
  mensagem_inicial?: string
) {
  return supabase
    .from('conexoes')
    .insert({
      estabelecimento_id,
      investidor_id,
      mensagem_inicial,
      status: 'pendente'
    })
}

/**
 * Envia mensagem no chat
 */
export async function enviarMensagem(
  conexao_id: string,
  remetente_id: string,
  remetente_tipo: 'estabelecimento' | 'investidor',
  conteudo: string,
  tipo: 'texto' | 'arquivo' | 'proposta' | 'contrato' = 'texto',
  arquivo_url?: string
) {
  return supabase
    .from('mensagens')
    .insert({
      conexao_id,
      remetente_id,
      remetente_tipo,
      conteudo,
      tipo,
      arquivo_url
    })
}

/**
 * Registra log de segurança
 */
export async function registrarLogSeguranca(
  user_id: string,
  user_tipo: 'estabelecimento' | 'investidor',
  acao: string,
  ip_address: string,
  user_agent: string,
  nivel_risco: 'baixo' | 'medio' | 'alto' | 'critico' = 'baixo',
  detalhes?: string
) {
  return supabase
    .from('logs_seguranca')
    .insert({
      user_id,
      user_tipo,
      acao,
      ip_address,
      user_agent,
      nivel_risco,
      detalhes,
      bloqueado: nivel_risco === 'critico'
    })
}

/**
 * Verifica se usuário está bloqueado
 */
export async function verificarUsuarioBloqueado(user_id: string) {
  const { data, error } = await supabase
    .from('logs_seguranca')
    .select('*')
    .eq('user_id', user_id)
    .eq('bloqueado', true)
    .order('created_at', { ascending: false })
    .limit(1)

  return { bloqueado: data && data.length > 0, error }
}

/**
 * Atualiza score IA do estabelecimento
 */
export async function atualizarScoreIA(
  estabelecimento_id: string,
  score: number,
  analise: string
) {
  return supabase
    .from('estabelecimentos')
    .update({
      score_ia: score,
      analise_ia: analise,
      updated_at: new Date().toISOString()
    })
    .eq('id', estabelecimento_id)
}

/**
 * Libera dados ocultos após contrato
 */
export async function liberarDadosOcultos(estabelecimento_id: string) {
  return supabase
    .from('estabelecimentos')
    .update({
      dados_ocultos: false,
      updated_at: new Date().toISOString()
    })
    .eq('id', estabelecimento_id)
}

// Configurações de Real-time para chat
export function subscribeToMessages(
  conexao_id: string,
  callback: (payload: any) => void
) {
  return supabase
    .channel(`messages:${conexao_id}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'mensagens',
        filter: `conexao_id=eq.${conexao_id}`
      },
      callback
    )
    .subscribe()
}

// Tipos exportados para uso na aplicação
export type Estabelecimento = Database['public']['Tables']['estabelecimentos']['Row']
export type Investidor = Database['public']['Tables']['investidores']['Row']
export type Conexao = Database['public']['Tables']['conexoes']['Row']
export type Mensagem = Database['public']['Tables']['mensagens']['Row']
export type LogSeguranca = Database['public']['Tables']['logs_seguranca']['Row']
