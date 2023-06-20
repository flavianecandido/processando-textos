var html =  "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br> Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"

var cidades = html.split("*")
document.write('<b>Cidades Avaliadas:</b>' + "<br>")
document.write(cidades[1] + "<br>")
document.write(cidades[3] + "<br>")
document.write(cidades[5] + "<br>")

var roteiros = html.split("#")
document.write('<b>Roteiros A:</b>' + "<br>")
document.write(roteiros[1])
document.write(roteiros[4])
document.write(roteiros[7])


var locaisRoteiroA1 = roteiros[1].split("|")[1].trim().split(";").length;
document.write('<b>Quantidade de locais Roteiros A:</b>' + "<br>");
document.write(locaisRoteiroA1 + "<br>");


var centrosp = html.split("#")
document.write('<b>Pontos turísticos localizados Centro da cidade de São Paulo:</b>' + "<br>")
document.write(centrosp[2])

var downtown = html.split("#")
document.write('<b>Pontos turístico localizados Downtown na cidade de Los Angeles:</b>' + "<br>")
document.write(downtown[5])
