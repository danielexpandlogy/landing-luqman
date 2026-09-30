-- Alta de la landing «Luqman» (luqman) en el Landing Lab.
-- Generado desde landing-lab.json: no editar a mano, regenerar con generar-sql.mjs.
-- Pegar en Supabase → SQL Editor. Se puede ejecutar varias veces sin duplicar nada.

begin;

insert into public.lp_settings (landing, name, landing_url, thanks_url, accent_color)
values ('luqman', 'Luqman', null, null, '#2563eb')
on conflict (landing) do update set
  name = excluded.name,
  accent_color = excluded.accent_color,
  landing_url = coalesce(excluded.landing_url, public.lp_settings.landing_url),
  thanks_url = coalesce(excluded.thanks_url, public.lp_settings.thanks_url),
  updated_at = now();

-- Titular del hero (headline, headline). Se crea apagada.
insert into public.lp_variables (landing, key, name, description, kind, config, enabled, position)
values ('luqman', 'headline', 'Titular del hero', 'El titular grande de arriba. Suele ser la variable con más impacto.', 'headline', '{}'::jsonb, false, 1)
on conflict (landing, key) do update set
  name = excluded.name, description = excluded.description, config = excluded.config;
insert into public.lp_options (variable_id, label, value, is_control, position)
select id, 'Original', '{"before":"[Pendiente] Titular principal con una ","highlight":"parte resaltada","after":""}'::jsonb, true, 0 from public.lp_variables where landing = 'luqman' and key = 'headline'
on conflict (variable_id) where is_control do update set value = excluded.value;

-- Texto debajo del titular (hero_lead, text). Se crea apagada.
insert into public.lp_variables (landing, key, name, description, kind, config, enabled, position)
values ('luqman', 'hero_lead', 'Texto debajo del titular', 'El párrafo que explica la oferta debajo del titular.', 'text', '{}'::jsonb, false, 2)
on conflict (landing, key) do update set
  name = excluded.name, description = excluded.description, config = excluded.config;
insert into public.lp_options (variable_id, label, value, is_control, position)
select id, 'Original', '{"text":"[Pendiente] Una o dos frases que expliquen qué ofrece Luqman, a quién y qué resultado obtiene."}'::jsonb, true, 0 from public.lp_variables where landing = 'luqman' and key = 'hero_lead'
on conflict (variable_id) where is_control do update set value = excluded.value;

-- Imagen del hero (hero_image, image). Se crea apagada.
insert into public.lp_variables (landing, key, name, description, kind, config, enabled, position)
values ('luqman', 'hero_image', 'Imagen del hero', 'La imagen debajo del titular.', 'image', '{}'::jsonb, false, 3)
on conflict (landing, key) do update set
  name = excluded.name, description = excluded.description, config = excluded.config;
insert into public.lp_options (variable_id, label, value, is_control, position)
select id, 'Original', '{"src":"","alt":""}'::jsonb, true, 0 from public.lp_variables where landing = 'luqman' and key = 'hero_image'
on conflict (variable_id) where is_control do update set value = excluded.value;

-- Texto de los botones (cta_text, cta). Se crea apagada.
insert into public.lp_variables (landing, key, name, description, kind, config, enabled, position)
values ('luqman', 'cta_text', 'Texto de los botones', 'El texto de todos los botones de agendar (y su subtítulo).', 'cta', '{}'::jsonb, false, 4)
on conflict (landing, key) do update set
  name = excluded.name, description = excluded.description, config = excluded.config;
insert into public.lp_options (variable_id, label, value, is_control, position)
select id, 'Original', '{"label":"[Pendiente] Agendar ahora","sub":"[Pendiente] Subtítulo del botón"}'::jsonb, true, 0 from public.lp_variables where landing = 'luqman' and key = 'cta_text'
on conflict (variable_id) where is_control do update set value = excluded.value;

-- Color de los botones (button_color, color). Se crea apagada.
insert into public.lp_variables (landing, key, name, description, kind, config, enabled, position)
values ('luqman', 'button_color', 'Color de los botones', 'El color de los botones de agendar. Su efecto suele ser chico y tarda en medirse.', 'color', '{}'::jsonb, false, 5)
on conflict (landing, key) do update set
  name = excluded.name, description = excluded.description, config = excluded.config;
insert into public.lp_options (variable_id, label, value, is_control, position)
select id, 'Original', '{"color":"#2563eb","hover":"#1d4ed8"}'::jsonb, true, 0 from public.lp_variables where landing = 'luqman' and key = 'button_color'
on conflict (variable_id) where is_control do update set value = excluded.value;

-- Orden de las secciones (section_order, order). Se crea apagada.
insert into public.lp_variables (landing, key, name, description, kind, config, enabled, position)
values ('luqman', 'section_order', 'Orden de las secciones', 'En qué orden aparecen las secciones debajo del hero.', 'order', '{"sections":[{"key":"benefits","label":"Beneficios"},{"key":"process","label":"Cómo funciona"},{"key":"testimonials","label":"Testimonios"},{"key":"faq","label":"Preguntas frecuentes"},{"key":"ctaBand","label":"Llamado final"}]}'::jsonb, false, 6)
on conflict (landing, key) do update set
  name = excluded.name, description = excluded.description, config = excluded.config;
insert into public.lp_options (variable_id, label, value, is_control, position)
select id, 'Original', '{"order":["benefits","process","testimonials","faq","ctaBand"]}'::jsonb, true, 0 from public.lp_variables where landing = 'luqman' and key = 'section_order'
on conflict (variable_id) where is_control do update set value = excluded.value;

commit;
