import React from 'react'
import "../styles/Discussion.css"
import DiscussionBox from './DiscussionBox'

function Discussion() {
  return (
    <div className='discussionContainer'>
        <button type="submit" className='postButton'>+</button>
        <div className="DCleft">
            <div className="DClheading">
                <h1>My Questions</h1>
            </div>
    
            <div className="DCRupper">
                <h1>Questions Asked:</h1>
            </div>

            <div className="DCRlower">
                <h1>Question Answered:</h1>
            </div>
        </div>

        <div className="DCright">
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz" answerBy="Mr. Mehta" answer="In order to make a budget, estimate the amount of money you will ideally need to spend each month based on your income, lifestyle, and wants. Having such an estimate will help you gain more control over your finances, and accordingly organize your spending and savings."/>
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz" answerBy="Mr. Mehta" answer="In order to make a budget, estimate the amount of money you will ideally need to spend each month based on your income, lifestyle, and wants. Having such an estimate will help you gain more control over your finances, and accordingly organize your spending and savings."/>
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz" answerBy="Mr. Mehta" answer="In order to make a budget, estimate the amount of money you will ideally need to spend each month based on your income, lifestyle, and wants. Having such an estimate will help you gain more control over your finances, and accordingly organize your spending and savings."/>
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz" answerBy="Mr. Mehta" answer="In order to make a budget, estimate the amount of money you will ideally need to spend each month based on your income, lifestyle, and wants. Having such an estimate will help you gain more control over your finances, and accordingly organize your spending and savings."/>
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz" answerBy="Mr. Mehta" answer="In order to make a budget, estimate the amount of money you will ideally need to spend each month based on your income, lifestyle, and wants. Having such an estimate will help you gain more control over your finances, and accordingly organize your spending and savings."/>
        </div>
    </div>
  )
}

export default Discussion