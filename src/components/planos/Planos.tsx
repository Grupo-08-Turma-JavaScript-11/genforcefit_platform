import React from 'react';

export const Planos = () => {
  const plans = [
    {
      title: "Plano Individual",
      price: "Gratuitamente",
      features: ["Acesso completo", "Treinos diários", "Suporte individual"]
    },
    {
      title: "Plano Coletivo",
      price: "Gratuitamente",
      features: ["Aulas em grupo", "Eventos livres", "Espaço compartilhado"]
    }
  ];

  return (
    <section id="planos" className="memberships-section">
      <div className="container">
        <h2 className="section-title">Nossos Planos</h2>
        
        <div className="membership-grid">
          {plans.map((plan, index) => (
            <div className="membership-card" key={index}>
              <h3>{plan.title}</h3>
              <p className="price-tag">{plan.price}</p> 
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="btn-main">MATRICULE-SE JÁ</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};